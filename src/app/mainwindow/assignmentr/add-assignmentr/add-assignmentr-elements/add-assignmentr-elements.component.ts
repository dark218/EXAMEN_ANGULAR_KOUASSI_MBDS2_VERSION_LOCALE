import { MatSnackBar } from '@angular/material';
import { AssignmentrInteractionService } from '../../assignmentr-interaction.service';
import { AssignmentInteractionService } from '../../../assignment/assignment-interaction.service';
import { Component, OnInit} from '@angular/core';
import {  FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Assignmentr } from '../../assignmentr.model';
import { Assignment } from '../../../assignment/assignment.model';
import { AuthService } from 'src/app/auth/auth.service';
import { MatiereInteractionService } from '../../../matiere/matiere-interaction.service';
import { ProfesseurInteractionService } from '../../../professeur/professeur-interaction.service';
import { Subscription } from 'rxjs';
import { mimeType } from './mime-type.validator'
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-assignmentr-elements',
  templateUrl: './add-assignmentr-elements.component.html',
  styleUrls: ['./add-assignmentr-elements.component.css']
})
export class AddAssignmentElementsComponentr implements OnInit {


  
  assignmentr : Assignmentr;
  assignment : Assignment;
  isLoading = false;
  assignmentsr: Assignmentr[] = [];
  matieres = [];
  professeurs= [];
  note="";
  remarque="";
 
  form: FormGroup;
  private mode = "create";
  private assignmentId : string;
  private assignmentSubs: Subscription;
  private matiereSubs: Subscription;
  private professeurSubs: Subscription;
  preview:string;


 constructor(private assignmentrInteractionService: AssignmentrInteractionService,private router : Router,private assignmentInteractionService: AssignmentInteractionService,private authService: AuthService,private matiereInteractionService: MatiereInteractionService, private professeurInteractionService: ProfesseurInteractionService, public route: ActivatedRoute, private snackBar : MatSnackBar){}


  ngOnInit() {
    this.form = new FormGroup({
    
      'nomdevoir': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'nomeleve': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'datederendu': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'nommatiere': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'nomprof': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]}),
      'avatar1': new FormControl(null,{validators: [Validators.required],asyncValidators:[mimeType]}),
      'note': new FormControl(null,{validators: [Validators.required, Validators.min(0),Validators.max(20)]}),
      'remarque': new FormControl(null,{validators: [Validators.required, Validators.minLength(1)]})
   
    });
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has('assignmentId')){
        this.mode = "edit";
        this.assignmentId = paramMap.get('assignmentId');
        this.isLoading = true;
        this.assignmentInteractionService.getAssignments(this.assignmentId).subscribe(assignmentData =>{
        this.isLoading = false;
        this.assignment = {id:assignmentData._id,
                          
                           nomdevoir: assignmentData.nomdevoir,
                           nomeleve : assignmentData.nomeleve,
                           datederendu: assignmentData.datederendu,
                           nommatiere: assignmentData.nommatiere,
                           nomprof: assignmentData.nomprof,
                           avatar1:assignmentData.avatar1,
                           note: assignmentData.note,
                           remarque:assignmentData.remarque
                          };
        this.form.setValue({'nomdevoir':this.assignment.nomdevoir ,
                          'nomeleve':this.assignment.nomeleve ,
                          'datederendu':this.assignment.datederendu ,
                          'nommatiere':this.assignment.nommatiere,
                          'nomprof':this.assignment.nomprof,
                           'avatar1':this.assignment.avatar1,
                          'note':this.assignment.note,
                          'remarque':this.assignment.remarque
                        });

        });
      }else{
        this.mode = "create";
        this.assignmentId = null;
      }
    });
   
      
      this.isLoading = true;
      this.matiereInteractionService.getMatiere();
      this.matiereSubs = this.matiereInteractionService.getMatiereUpdateListener()
        .subscribe((posts) => {
          this.isLoading = false;
          this.matieres = posts;
        });
        this.isLoading = true;
        this.professeurInteractionService.getProfesseur();
        this.professeurSubs = this.professeurInteractionService.getProfesseurUpdateListener()
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
  onAddAssignment() {
    if (this.form.invalid) {
      return;
    }

    if(this.mode === "edit"){
      
      this.assignmentrInteractionService.addAssignment(this.form.value.nomdevoir,
        this.form.value.nomeleve,
        this.form.value.datederendu,
        this.form.value.nommatiere,
        this.form.value.nomprof,
        this.form.value.avatar1,
        this.form.value.note,
        this.form.value.remarque
       
        );
        this.snackBar.open("Assignment Added Successfully", "Close");
        this.router.navigate(["main"]);
    }else{
      this.assignmentrInteractionService.updateAssignment(this.assignmentId,this.form.value.nomdevoir,
        this.form.value.nomeleve,
        this.form.value.datederendu,
        this.form.value.nommatiere,
        this.form.value.nomprof,
        this.form.value.avatar1,
        this.form.value.note,
        this.form.value.remarque );
        this.snackBar.open("Assignmentr Edited!! ", "Close");
        this.router.navigate(["main"]);
    }

    this.form.reset();
  }


  onDelete(assignmentId: string) {
    this.assignmentInteractionService.deleteAssignment(assignmentId);
  //  this.snackBar.open("Assignment Deleted Successfully", "Close");
  }


}

