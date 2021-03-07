import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Assignmentr} from './assignmentr.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AssignmentrInteractionService {
  private assignmentr: Assignmentr[] = [];
  private assignmentUpdatedr = new Subject<Assignmentr[]>();

  constructor(private http: HttpClient, private router : Router){}
url='https://examenangularmongokouassi.herokuapp.com/api/assignmentr';
  getAssignment() {
    this.http.get<{message: string, assignmentsr: any}>(this.url)
    .pipe(map(assignmentrData => {
     return assignmentrData.assignmentsr.map(assignmentr=>{
       return{

       nomdevoir: assignmentr.nomdevoir,
        nomeleve: assignmentr.nomeleve,
        datederendu: assignmentr.datederendu,
        nommatiere: assignmentr.nommatiere,
        nomprof: assignmentr.nomprof,
        avatar1: assignmentr.avatar1,
        note:assignmentr.note,
        remarque:assignmentr.remarque,
        id: assignmentr._id
       }
     })
    }))
    .subscribe((transformedAssignments)=>{
      this.assignmentr = transformedAssignments;
      this.assignmentUpdatedr.next([...this.assignmentr])
    });

  }

  getAssignmentUpdateListener() {
    return this.assignmentUpdatedr.asObservable();
  }

  getAssignmentsr(id: string){
    return this.http.get<{_id: string, nomdevoir: string, nomeleve: string, datederendu: string, nommatiere: string,nomprof: string,avatar1: string, note:string,remarque:string}>
    (this.url + id);
  }

  addAssignment(nomdevoir: string, nomeleve: string, datederendu: string, nommatiere: string,nomprof: string,avatar1:File, note:string,remarque:string) {
    var assignmentrData: any = new FormData();
    assignmentrData.append("nomdevoir", nomdevoir);
    assignmentrData.append("nomeleve", nomeleve);
    assignmentrData.append("datederendu", datederendu);
    assignmentrData.append("nommatiere", nommatiere);
    assignmentrData.append("nomprof", nomprof);
    assignmentrData.append("avatar1", avatar1);
    assignmentrData.append("note", note);
    assignmentrData.append("remarque", remarque);
   
    this.http.post<{message: string, assignmentr: Assignmentr}>(this.url,assignmentrData)
    .subscribe((responseData)=>{
      const assignmentr: Assignmentr = {id:responseData.assignmentr.id,
        nomdevoir: nomdevoir,
        nomeleve:nomeleve,
        datederendu:datederendu,
        nommatiere: nommatiere,
        nomprof: nomprof,
        avatar1:responseData.assignmentr.avatar1,
        note:note,
        remarque:remarque
       
       };
      this.assignmentr.push(assignmentr);
      this.assignmentUpdatedr.next([...this.assignmentr]);
      this.router.navigate(["/assignmentsr/create"]);
    });

  }

  updateAssignment(id: string ,nomdevoir: string, nomeleve: string, datederendu: string, nommatiere: string,nomprof: string,avatar1: File | string, note:string,remarque:string){
    let assignmentrData: Assignmentr | FormData;
    if (typeof(avatar1)==='object' ){
      assignmentrData = new FormData();
      assignmentrData.append("id", id);
      assignmentrData.append("nomdevoir", nomdevoir);
      assignmentrData.append("nomeleve", nomeleve);
      assignmentrData.append("datederendu", datederendu);
      assignmentrData.append("nommatiere", nommatiere);
      assignmentrData.append("nomprof", nomprof);
      assignmentrData.append("avatar1", avatar1);
      assignmentrData.append("note", note);
      assignmentrData.append("remarque", remarque);
    } else{
      assignmentrData  ={id : id ,
                     
        nomdevoir: nomdevoir,
        nomeleve:nomeleve,
        datederendu:datederendu,
        nommatiere: nommatiere,
        nomprof: nomprof,
        avatar1:avatar1,
        note:note,
        remarque:remarque
                       };
    }
    
    this.http
             .put(this.url+ id , assignmentrData)
             .subscribe(response => {
               const updatedAssignments = [...this.assignmentr];
               const oldAssignmentIndex = updatedAssignments.findIndex(s => s.id ===assignmentr.id);
               const assignmentr : Assignmentr ={id:id ,nomdevoir: nomdevoir, nomeleve: nomeleve, datederendu: datederendu, nommatiere: nommatiere,nomprof: nomprof, avatar1:"",note:note,remarque:remarque};
               updatedAssignments[oldAssignmentIndex] = assignmentr;
               this.assignmentUpdatedr.next([...this.assignmentr]);
               this.router.navigate(["/assignments/create"]);
             });
  }


  deleteAssignment(assignmentrId: string) {
    this.http.delete(this.url + assignmentrId)
      .subscribe(() => {
        const updatedAssignmentr = this.assignmentr.filter(assignmentr => assignmentr.id !== assignmentrId);
        this.assignmentr = updatedAssignmentr;
        this.assignmentUpdatedr.next([...this.assignmentr])
      });
  }
}
