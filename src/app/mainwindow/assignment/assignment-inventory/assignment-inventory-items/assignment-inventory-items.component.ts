import { MatSnackBar } from '@angular/material';
import { AssignmentInteractionService } from '../../assignment-interaction.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Assignment } from '../../assignment.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-assignment-inventory-items',
  templateUrl: './assignment-inventory-items.component.html',
  styleUrls: ['./assignment-inventory-items.component.css']
})
export class AssignmentInventoryItemsComponent implements OnInit,OnDestroy {
  searchTerm : string;
  assignments: Assignment[] = [];
  isLoading= false;
  userIsAuthenticated = false;
  private assignmentSubs: Subscription;
  private authStatusSub: Subscription;

  constructor(private assignmentInteractionService: AssignmentInteractionService, private authService: AuthService , private snackBar: MatSnackBar){}

  ngOnInit() {
    this.isLoading = true;
    this.assignmentInteractionService.getAssignment();
    this.assignmentSubs = this.assignmentInteractionService.getAssignmentUpdateListener()
      .subscribe((posts: Assignment[]) => {
        this.isLoading = false;
        this.assignments = posts;
      });

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onDelete(assignmentId: string) {
    this.assignmentInteractionService.deleteAssignment(assignmentId);
    this.snackBar.open("Assignment Deleted Successfully", "Close");
  }

  ngOnDestroy() {
    this.assignmentSubs.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
