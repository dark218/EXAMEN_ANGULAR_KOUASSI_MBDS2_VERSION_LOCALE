import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Matiere} from './matiere.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MatiereInteractionService {
  private matiere: Matiere[] = [];
  private matiereUpdated = new Subject<Matiere[]>();

  constructor(private http: HttpClient, private router : Router){}
url='https://examenangularmongokouassi.herokuapp.com/api/matiere';
  getMatiere() {
    this.http.get<{message: string, matieres: any}>(this.url)
    .pipe(map(matiereData => {
     return matiereData.matieres.map(matiere=>{
       return{

       nommat: matiere.nommat,
        nomprof: matiere.nomprof,
        avatar1: matiere.avatar1,
        id: matiere._id
       }
     })
    }))
    .subscribe((transformedMatieres)=>{
      this.matiere = transformedMatieres;
      this.matiereUpdated.next([...this.matiere])
    });

  }

  getMatiereUpdateListener() {
    return this.matiereUpdated.asObservable();
  }

  getMatieres(id: string){
    return this.http.get<{_id: string , nommat: string , nomprof: string, avatar1: string}>
    (this.url + id);
  }

  addMatiere( nommat: string, nomprof: string, avatar1: File) {
    var matiereData: any = new FormData();
    matiereData.append("nommat", nommat);
    matiereData.append("nomprof", nomprof);
    matiereData.append("avatar1", avatar1);
  
                                
                               
    this.http.post<{message: string,matiere: Matiere}>(this.url,matiereData)
    .subscribe((responseData)=>{
      const matiere: Matiere ={id : responseData.matiere.id,
                               nommat: nommat,
                               nomprof:nomprof,
                               avatar1:responseData.matiere.avatar1,
                            };
      this.matiere.push(matiere),
      this.matiereUpdated.next([...this.matiere]);
      this.router.navigate(["/matiere/create"]);
    });

  }

  updateMatiere(id: string ,  nommat: string, nomprof: string ,avatar1: File | string){

    let matiereData: Matiere | FormData;

    if (typeof(avatar1)==='object' ){
      matiereData = new FormData();
      matiereData.append("id", id);
      matiereData.append("nommat",nommat);
      matiereData.append("nomprof",nomprof);
      matiereData.append("avatar1", avatar1, nommat);
    

    } else{
       matiereData  ={id : id ,
                     
                      nommat:nommat,
                      nomprof:nomprof,
                        avatar1: avatar1
                       };
    }
    this.http
             .put(this.url + id , matiereData)
             .subscribe(response => {
               const updatedMatieres = [...this.matiere];
               const oldMatiereIndex = updatedMatieres.findIndex(i => i.id === id);

               const matiere : Matiere ={id : id ,
                                             
                                         nommat:nommat,
                                         nomprof:nomprof,
                                             avatar1: " "
                                             };
               updatedMatieres[oldMatiereIndex] = matiere;
               this.matiereUpdated.next([...this.matiere]);
               this.router.navigate(["/matiere/create"]);
             });
  }

  deleteMatiere(matiereId: string) {
    this.http.delete(this.url + matiereId)
      .subscribe(() => {
        const updatedMatiere = this.matiere.filter(matiere => matiere.id !== matiereId);
        this.matiere = updatedMatiere;
        this.matiereUpdated.next([...this.matiere])
      });
  }
}
