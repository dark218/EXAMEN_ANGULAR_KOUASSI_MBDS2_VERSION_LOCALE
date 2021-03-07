import { MatSnackBar } from '@angular/material';
import { MatiereInteractionService } from '../../../matiere/matiere-interaction.service';
import { ProfesseurInteractionService } from '../../../professeur/professeur-interaction.service';
import { Component, OnInit} from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Matiere } from '../../matiere.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';
import { mimeType } from './mime-type.validator'



@Component({
  selector: 'app-add-matiere-elements',
  templateUrl: './add-matiere-elements.component.html',
  styleUrls: ['./add-matiere-elements.component.css']
})
export class AddMatiereElementsComponent implements OnInit {


  matiere : Matiere;
  isLoading = false;
  matieres: Matiere[] = [];
  professeurs = [];
  users = [];
  imagePreview : string;
  
  form: FormGroup;
  private mode = "create";
  private matiereId : string;
  private supplierSubs: Subscription;
  private userSubs: Subscription;
  preview: string;

 constructor(private matiereInteractionService: MatiereInteractionService,private professeurInteractionService: ProfesseurInteractionService, public route: ActivatedRoute, private snackBar : MatSnackBar){}


  ngOnInit() {
    this.form = new FormGroup({
      'nommat': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'nomprof': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'avatar1': new FormControl(null,{validators: [Validators.required],asyncValidators:[mimeType]}),
   
      
    });
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has('matiereId')){
        this.mode = "edit";
        this.matiereId = paramMap.get('matiereId');
        this.isLoading = true;
        this.matiereInteractionService.getMatieres(this.matiereId).subscribe(matiereData =>{
        this.isLoading = false;
        this.matiere = {id:matiereData._id,
                           nommat: matiereData.nommat,
                           nomprof: matiereData.nomprof,
                           avatar1 : matiereData.avatar1
                   
                          
                          };
        this.form.setValue({'nommat':this.matiere.nommat ,
                          'nomprof':this.matiere.nomprof ,
                          'avatar1':this.matiere.avatar1 
                    });

        });
      }else{
        this.mode = "create";
        this.matiereId = null;
      }
    });
    this.isLoading = true;
    this.professeurInteractionService.getProfesseur();
    this.supplierSubs = this.professeurInteractionService.getProfesseurUpdateListener()
      .subscribe((posts) => {
        this.isLoading = false;
        this.professeurs = posts;
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

  onAddMatiere() {
    if (this.form.invalid) {
      return;
    }

    if(this.mode === "create"){
      this.matiereInteractionService.addMatiere(this.form.value.nommat,
        this.form.value.nomprof,
        this.form.value.avatar1,
      
        );
        this.snackBar.open("Matiere Added Successfully", "Close");
    }else{
      this.matiereInteractionService.updateMatiere(this.matiereId,this.form.value.nommat,
        this.form.value.nomprof,
        this.form.value.avatar1
      );
        this.snackBar.open("Matiere Edited!! ", "Close");
    }

    this.form.reset();
  }





}
