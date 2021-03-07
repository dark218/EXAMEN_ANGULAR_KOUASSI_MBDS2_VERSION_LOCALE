import { MatSnackBar } from '@angular/material';
import { AssignmentrInteractionService } from '../../assignmentr-interaction.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Assignmentr } from '../../assignmentr.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-assignmentr-inventory-items',
  templateUrl: './assignmentr-inventory-items.component.html',
  styleUrls: ['./assignmentr-inventory-items.component.css']
})
export class AssignmentrInventoryItemsComponent implements OnInit,OnDestroy {
  searchTerm : string;
  assignmentrs: Assignmentr[] = [];
  isLoading= false;
  userIsAuthenticated = false;
  private assignmentSubs: Subscription;
  private authStatusSub: Subscription;

  constructor(private assignmentrInteractionService: AssignmentrInteractionService, private authService: AuthService , private snackBar: MatSnackBar){}

  ngOnInit() {
    this.isLoading = true;
    this.assignmentrInteractionService.getAssignment();
    this.assignmentSubs = this.assignmentrInteractionService.getAssignmentUpdateListener()
      .subscribe((posts: Assignmentr[]) => {
        this.isLoading = false;
        this.assignmentrs = posts;
      });

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onDelete(assignmentId: string) {
    this.assignmentrInteractionService.deleteAssignment(assignmentId);
    this.snackBar.open("Assignment Deleted Successfully", "Close");
  }

  ngOnDestroy() {
    this.assignmentSubs.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
