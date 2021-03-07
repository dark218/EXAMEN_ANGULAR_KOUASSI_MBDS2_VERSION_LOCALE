import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x-configuration-settings-admin',
  templateUrl: './x-configuration-settings-admin.component.html',
  styleUrls: ['./x-configuration-settings-admin.component.css']
})
export class XConfigurationSettingsAdminComponent  {

  constructor(public authService : AuthService,){}



  
  

  onSignup(form:  NgForm){

    if(form.invalid){
      return;
    }
    console.log(form.value.role)
    this.authService.createUser(form.value.name,form.value.email,form.value.password);
  };

}
