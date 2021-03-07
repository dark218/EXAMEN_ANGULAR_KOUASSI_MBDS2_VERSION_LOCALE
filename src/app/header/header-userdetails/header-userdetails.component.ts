import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header-userdetails',
  templateUrl: './header-userdetails.component.html',
  styleUrls: ['./header-userdetails.component.css']
})
export class HeaderUserdetailsComponent implements OnInit {

  userIsAuthenticated =false;
  private authListenerSubs: Subscription;
  private userSubs: Subscription;
 
  users= [];
  isLoading=false;
  

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated= isAuthenticated;
    });


    
    this.isLoading = true;
    this.authService.getUser();
    this.userSubs = this.authService.getUserUpdateListener()
      .subscribe((posts) => {
        this.isLoading = false;
        this.users = posts;
      });

  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

  

}
