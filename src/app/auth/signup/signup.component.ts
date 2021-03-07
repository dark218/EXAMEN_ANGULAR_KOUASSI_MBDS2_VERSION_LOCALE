import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBarModule, MatSnackBar } from '@angular/material';

@Component({
   templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public router:Router,public authService : AuthService,  private sankBar : MatSnackBar){}

  onSignup(form:  NgForm){

    if(form.invalid){
      return;
    }
    console.log(form.value.role)
    this.authService.createUser(form.value.name,form.value.email,form.value.password);
    this.router.navigate(["/login"]);
    this.sankBar.open("User ajoute ", 'Close');
  };

};
