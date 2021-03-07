import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router, NavigationStart } from '@angular/router';
import {AppModule} from 'src/app/app.module';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { AssignmentInteractionService } from 'src/app/mainwindow/assignment/assignment-interaction.service';
import { AssignmentrInteractionService } from 'src/app/mainwindow/assignmentr/assignmentr-interaction.service';
import { MatiereInteractionService } from 'src/app/mainwindow/matiere/matiere-interaction.service';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mainwindow',
  templateUrl: './mainwindow.component.html',
  styleUrls: ['./mainwindow.component.css']
})
export class MainwindowComponent  implements OnInit{
  assignments = [];
  assignmentrs = [];
  matieres = [];
  isLoading= false;
  userIsAuthenticated = false;
  private assignmentSubs: Subscription;
  private matiereSubs: Subscription;
  private authStatusSub: Subscription;

  constructor(private assignmentInteractionService: AssignmentInteractionService,private assignmentrInteractionService: AssignmentrInteractionService,private matiereInteractionService: MatiereInteractionService, private authService: AuthService ,private router : Router, private snackBar: MatSnackBar){}

  ngOnInit() {
    this.isLoading = true;
    this.assignmentInteractionService.getAssignment();
    this.assignmentSubs = this.assignmentInteractionService.getAssignmentUpdateListener()
      .subscribe((posts) => {
        this.isLoading = false;
        this.assignments = posts;
      }); 
      
      this.isLoading = true;
      this.assignmentrInteractionService.getAssignment();
      this.assignmentSubs = this.assignmentrInteractionService.getAssignmentUpdateListener()
        .subscribe((posts) => {
          this.isLoading = false;
          this.assignmentrs = posts;
        });
      this.isLoading = true;
      this.matiereInteractionService.getMatiere();
      this.matiereSubs = this.matiereInteractionService.getMatiereUpdateListener()
        .subscribe((posts) => {
          this.isLoading = false;
          this.matieres = posts;
        });
        
  } 
  

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data,
        event.previousIndex,
        event.currentIndex);
        this.router.navigate(["/main"]);
        
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex, event.currentIndex);
       
    }
  }
  onDelete(assignmentId: string) {
    this.assignmentInteractionService.deleteAssignment(assignmentId);
    this.snackBar.open("Assignment Deleted Successfully", "Close");
  }
  onDeleter(assignmentId: string) {
    this.assignmentrInteractionService.deleteAssignment(assignmentId);
    this.snackBar.open("Assignment Deleted Successfully", "Close");
  }
   

}



