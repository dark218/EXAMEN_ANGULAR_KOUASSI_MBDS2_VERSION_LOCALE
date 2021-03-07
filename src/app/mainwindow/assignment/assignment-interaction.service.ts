import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Assignment} from './assignment.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {bd} from './data';

@Injectable({
  providedIn: 'root'
})
export class AssignmentInteractionService {
  private assignment: Assignment[] = [];
  private assignmentUpdated = new Subject<Assignment[]>();

  constructor(private http: HttpClient, private router : Router){}
url='https://examenangularmongokouassi.herokuapp.com/api/assignment';
  getAssignment() {
    this.http.get<{message: string, assignments: any}>(this.url)
    .pipe(map(assignmentData => {
     return assignmentData.assignments.map(assignment=>{
       return{

       nomdevoir: assignment.nomdevoir,
        nomeleve: assignment.nomeleve,
        datederendu: assignment.datederendu,
        nommatiere: assignment.nommatiere,
        nomprof: assignment.nomprof,
        avatar1: assignment.avatar1,
        note:assignment.note,
        remarque:assignment.remarque,
        id: assignment._id
       }
     })
    }))
    .subscribe((transformedAssignments)=>{
      this.assignment = transformedAssignments;
      this.assignmentUpdated.next([...this.assignment])
    });

  }

  getAssignmentUpdateListener() {
    return this.assignmentUpdated.asObservable();
  }

  getAssignments(id: string){
    return this.http.get<{_id: string, nomdevoir: string, nomeleve: string, datederendu: string, nommatiere: string,nomprof: string, avatar1: string, note:string,remarque:string}>
    (this.url + id);
  }

  addAssignment(nomdevoir: string, nomeleve: string, datederendu: string, nommatiere: string,nomprof: string, avatar1: String, note:string,remarque:string) {
  var assignmentData: any = new FormData();
  assignmentData.append("nomdevoir", nomdevoir);
  assignmentData.append("nomeleve", nomeleve);
  assignmentData.append("datederendu", datederendu);
  assignmentData.append("nommatiere", nommatiere);
  assignmentData.append("nomprof", nomprof);
  assignmentData.append("avatar1", avatar1);
  assignmentData.append("note", note);
  assignmentData.append("remarque", remarque);
   
    this.http.post<{message: string, assignment: Assignment}>(this.url,assignmentData)
    .subscribe((responseData)=>{
      const assignment: Assignment = {id:responseData.assignment.id,
        nomdevoir: nomdevoir,
        nomeleve:nomeleve,
        datederendu:datederendu,
        nommatiere: nommatiere,
        nomprof: nomprof,
        avatar1:responseData.assignment.avatar1,
        note:note,
        remarque:remarque
       
       };
      this.assignment.push(assignment);
      this.assignmentUpdated.next([...this.assignment]);
      this.router.navigate(["/assignments/create"]);
    });

  }
  addAssignments(assignment: Assignment): Observable<any> {
    // this.assignment.push(assignment);
  

    return this.http.post<{message: string, assignment: Assignment}>(this.url, assignment);
  }

  updateAssignment(id: string ,nomdevoir: string, nomeleve: string, datederendu: string, nommatiere: string,nomprof: string,avatar1: File | string, note:string,remarque:string){
    let assignmentData: Assignment | FormData;
    if (typeof(avatar1)==='object'  ){
      assignmentData = new FormData();
      assignmentData.append("id", id);
      assignmentData.append("nomdevoir", nomdevoir);
      assignmentData.append("nomeleve", nomeleve);
      assignmentData.append("datederendu", datederendu);
      assignmentData.append("nommatiere", nommatiere);
      assignmentData.append("nomprof", nomprof);
      assignmentData.append("avatar1", avatar1);
      assignmentData.append("note", note);
      assignmentData.append("remarque", remarque);
    } else{
      assignmentData  ={id : id ,
                     
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
             .put(this.url + id , assignmentData)
             .subscribe(response => {
               const updatedAssignments = [...this.assignment];
               const oldAssignmentIndex = updatedAssignments.findIndex(s => s.id ===assignment.id);
               const assignment : Assignment ={id:id ,nomdevoir: nomdevoir, nomeleve: nomeleve, datederendu: datederendu, nommatiere: nommatiere,nomprof: nomprof, avatar1:"",note:note,remarque:remarque};
               updatedAssignments[oldAssignmentIndex] = assignment;
               this.assignmentUpdated.next([...this.assignment]);
               this.router.navigate(["/assignments/create"]);
             });
  }

  peuplerBase(){
bd.forEach(a => {
  
  const assignment:Assignment = {id:a.id,
    nomdevoir: a.nomdevoir,
    nomeleve:a.nomeleve,
    datederendu:a.datederendu,
    nommatiere: a.nommatiere,
    nomprof: a.nomprof,
    avatar1:a.avatar1,
    note:a.note,
    remarque:a.remarque
    
   
   };
   
   this.assignment.push(assignment);
   this.assignmentUpdated.next([...this.assignment]);
   this.router.navigate(["/assignments/create"]);
   this.addAssignments(assignment);
});

  }
  deleteAssignment(assignmentId: string) {
    this.http.delete(this.url + assignmentId)
      .subscribe(() => {
        const updatedAssignment = this.assignment.filter(assignment => assignment.id !== assignmentId);
        this.assignment = updatedAssignment;
        this.assignmentUpdated.next([...this.assignment])
      });
  }
}
