import { Subscription } from 'rxjs';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssignmentInteractionService } from '../../mainwindow/assignment/assignment-interaction.service';

@Component({
  selector: 'app-header-taskbar',
  templateUrl: './header-taskbar.component.html',
  styleUrls: ['./header-taskbar.component.css']
})
export class HeaderTaskbarComponent implements OnInit, OnDestroy {
 
  userIsAuthenticated =false;
  private authListenerSubs: Subscription;

  constructor(private authService:AuthService, private assignmentInteractionService: AssignmentInteractionService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated= isAuthenticated;
    });
  

   
  }
  
  PeuplerLaBase(){
    this.assignmentInteractionService.peuplerBase();
  }
  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
