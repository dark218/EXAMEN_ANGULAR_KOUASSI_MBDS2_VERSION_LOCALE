import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Professeur} from './professeur.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProfesseurInteractionService {
  private professeur: Professeur[] = [];
  private professeurUpdated = new Subject<Professeur[]>();

  constructor(private http: HttpClient, private router : Router){}
  url='https://examenangularmongokouassi.herokuapp.com/api/professeur';
  getProfesseur() {
    this.http.get<{message: string, professeurs: any}>(this.url)
    .pipe(map(professeurData => {
     return professeurData.professeurs.map(professeur=>{
       return{

    
        nomprof: professeur.nomprof,
        avatar1: professeur.avatar1,
        id: professeur._id
       }
     })
    }))
    .subscribe((transformedProfesseurs)=>{
      this.professeur = transformedProfesseurs;
      this.professeurUpdated.next([...this.professeur])
    });

  }

  getProfesseurUpdateListener() {
    return this.professeurUpdated.asObservable();
  }

  getProfesseurs(id: string){
    return this.http.get<{_id: string , nomprof: string, avatar1: string}>
    (this.url + id);
  }

  addProfesseur( nomprof: string, avatar1: File) {
    var professeurData: any = new FormData();
 
    professeurData.append("nomprof", nomprof);
    professeurData.append("avatar1", avatar1);
  
                                
                               
    this.http.post<{message: string,professeur: Professeur}>(this.url,professeurData)
    .subscribe((responseData)=>{
      const professeur:Professeur ={id : responseData.professeur.id,
                            
                               nomprof:nomprof,
                               avatar1:responseData.professeur.avatar1,
                            };
      this.professeur.push(professeur),
      this.professeurUpdated.next([...this.professeur]);
      this.router.navigate(["/professeur/create"]);
    });

  }

  updateProfesseur(id: string ,  nommat: string, nomprof: string ,avatar1: File | string){

    let professeurData: Professeur | FormData;

    if (typeof(avatar1)==='object'  ){
      professeurData = new FormData();
      professeurData.append("id", id);
      professeurData.append("nomprof",nomprof);
      professeurData.append("avatar1", avatar1, nommat);
   
    } else{
       professeurData  ={id : id ,
                     
               
                      nomprof:nomprof,
                        avatar1: avatar1
                       };
    }
    this.http
             .put(this.url + id , professeurData)
             .subscribe(response => {
               const updatedProfesseurs = [...this.professeur];
               const oldProfesseurIndex = updatedProfesseurs.findIndex(i => i.id === id);

               const professeur : Professeur ={id : id ,
                                             
                                    
                                         nomprof:nomprof,
                                             avatar1: " "
                                             };
               updatedProfesseurs[oldProfesseurIndex] = professeur;
               this.professeurUpdated.next([...this.professeur]);
               this.router.navigate(["/professeur/create"]);
             });
  }

  deleteProfesseur(professeurId: string) {
    this.http.delete(this.url + professeurId)
      .subscribe(() => {
        const updatedProfesseur = this.professeur.filter(professeur => professeur.id !== professeurId);
        this.professeur = updatedProfesseur;
        this.professeurUpdated.next([...this.professeur])
      });
  }
}
