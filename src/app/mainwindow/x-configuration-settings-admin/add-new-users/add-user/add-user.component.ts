import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from 'src/app/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  


  doc ;
  isLoading = false;

  form: FormGroup;
  private mode = "create";
  private docId : string;

  constructor(public authService : AuthService, public route: ActivatedRoute){}

  ngOnInit(){
    this.form = new FormGroup({
      'name': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'email': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'password': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
     

    });

    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has('userId')){
        this.mode = "edit";
        this.docId = paramMap.get('userId');
        this.isLoading = true;
        this.authService.getUserDatas(this.docId).subscribe(docData =>{
        this.isLoading = false;
        this.doc = {id:docData._id,
                           name: docData.name,
                           email : docData.email,
                           password: docData.password,
          
                          };
                          console.log(this.doc);
                          console.log(this.docId);
        this.form.setValue({
                          'name':this.doc.name ,
             
                          'email':this.doc.email ,
                          'password':this.doc.password
                 });

        });
      }else{
        this.mode = "create";
        this.docId = null;
      }
    })

  }
  get registerFormControl() {
    return this.form.controls;
  }



  onSignup(){

    if(this.form.invalid){
      return;
    }


    if(this.mode === "create"){
    this.authService.createUser(this.form.value.name,
                           
                                this.form.value.email,
                                this.form.value.password,
                              );
    }else{
      this.authService.updateUser(this.docId,this.form.value.name,
                                        
                                              this.form.value.email,
                                              this.form.value.password,
                                          );
    }
    this.form.reset();
  };

}
