import { AddUserComponent } from './mainwindow/x-configuration-settings-admin/add-new-users/add-user/add-user.component';
import { AddNewUsersComponent } from './mainwindow/x-configuration-settings-admin/add-new-users/add-new-users.component';
import { ManageAccountComponent } from './mainwindow/x-configuration-settings-admin/manage-account/manage-account.component';
import { AuthGuard } from './auth/auth.guard';
import { MatiereInventoryComponent } from './mainwindow/matiere/matiere-inventory/matiere-inventory.component';
import { ProfesseurInventoryComponent } from './mainwindow/professeur/professeur-inventory/professeur-inventory.component';
import { AssignmentInventoryComponent } from './mainwindow/assignment/assignment-inventory/assignment-inventory.component';
import { AssignmentrInventoryComponent } from './mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory.component';
import { AddMatiereComponent } from './mainwindow/matiere/add-matiere/add-matiere.component';
import { AddProfesseurComponent } from './mainwindow/professeur/add-professeur/add-professeur.component';
import { AddAssignmentComponent } from './mainwindow/assignment/add-assignment/add-assignment.component';
import { AddAssignmentComponentr } from './mainwindow/assignmentr/add-assignmentr/add-assignmentr.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { XConfigurationSettingsAdminComponent } from './mainwindow/x-configuration-settings-admin/x-configuration-settings-admin.component';


const routes: Routes = [
  
  {path: 'matiere', component: AddMatiereComponent  },
  {path: 'matiere/create', component: MatiereInventoryComponent },
  {path: 'editm/:matiereId', component: AddMatiereComponent ,canActivate:[AuthGuard]},

  {path: 'professeur', component: AddProfesseurComponent  },
  {path: 'professeur/create', component: ProfesseurInventoryComponent },
  {path: 'editp/:professeurId', component: AddProfesseurComponent ,canActivate:[AuthGuard]},

  {path: 'assignments', component: AddAssignmentComponent  },
  {path: 'assignments/create', component: AssignmentInventoryComponent },
  {path: 'edita/:assignmentId', component: AddAssignmentComponent ,canActivate:[AuthGuard]},

  {path: 'assignmentsr', component: AddAssignmentComponentr  },
  {path: 'assignmentsr/create', component: AssignmentrInventoryComponent },
  {path: 'editar/:assignmentId', component: AddAssignmentComponentr ,canActivate:[AuthGuard]},

  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},



  {path: 'settings', component: XConfigurationSettingsAdminComponent },
  {path: 'settings/Accounts', component: ManageAccountComponent },

  {path: 'updat/:userId', component: AddNewUsersComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
