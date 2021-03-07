import { MatSnackBar } from '@angular/material';
import { ProfesseurInteractionService } from '../../../professeur/professeur-interaction.service';
import { Component, OnInit} from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Professeur } from '../../professeur.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { mimeType } from './mime-type.validator'



@Component({
  selector: 'app-add-professeur-elements',
  templateUrl: './add-professeur-elements.component.html',
  styleUrls: ['./add-professeur-elements.component.css']
})
export class AddProfesseurElementsComponent implements OnInit {


  

  professeur : Professeur;
  isLoading = false;
  professeurs: Professeur[] = [];
  users = [];
  imagePreview : string;
  
  form: FormGroup;
  private mode = "create";
  private professeurId : string;
  private supplierSubs: Subscription;
  private userSubs: Subscription;
  preview: string;

 constructor(private professeurInteractionService: ProfesseurInteractionService,private authService: AuthService, public route: ActivatedRoute, private snackBar : MatSnackBar){}


  ngOnInit() {
    this.form = new FormGroup({
     
      'nomprof': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'avatar1': new FormControl(null,{validators: [Validators.required],asyncValidators:[mimeType]}),
  
    });
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has('professeurId')){
        this.mode = "edit";
        this.professeurId = paramMap.get('professeurId');
        this.isLoading = true;
        this.professeurInteractionService.getProfesseurs(this.professeurId).subscribe(professeurData =>{
        this.isLoading = false;
        this.professeur = {id:professeurData._id,
                         
                           nomprof: professeurData.nomprof,
                           avatar1 : professeurData.avatar1
                      
                          
                          };
        this.form.setValue({
                          'nomprof':this.professeur.nomprof ,
                          'avatar1':this.professeur.avatar1 
                      });

        });
      }else{
        this.mode = "create";
        this.professeurId = null;
      }
    });
  
  }
  get registerFormControl() {
    return this.form.controls;
  }

  // Image Preview
  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      avatar1: file
    });
    this.form.get('avatar1').updateValueAndValidity()

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(file)
  }

  onAddProfesseur() {
    if (this.form.invalid) {
      return;
    }

    if(this.mode === "create"){
      this.professeurInteractionService.addProfesseur(
        this.form.value.nomprof,
        this.form.value.avatar1,
      
        );
        this.snackBar.open("Professeur Added Successfully", "Close");
    }else{
      this.professeurInteractionService.updateProfesseur(this.professeurId,this.form.value.nommat,
        this.form.value.nomprof,
        this.form.value.avatar1
    );
        this.snackBar.open("Professeur Edited!! ", "Close");
    }

    this.form.reset();
  }





}
