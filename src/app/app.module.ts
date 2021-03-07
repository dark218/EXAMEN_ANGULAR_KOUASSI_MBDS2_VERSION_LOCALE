import { AuthGuard } from './auth/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { GoogleChartsModule } from 'angular-google-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule, MatInputModule, MatDialogModule, MatButtonModule, MatButton, MatRadioModule, MatSnackBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderUserdetailsComponent } from './header/header-userdetails/header-userdetails.component';
import { HeaderTaskbarComponent } from './header/header-taskbar/header-taskbar.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { MenuitemComponent } from './sidemenu/menuitem/menuitem.component';
import { MainwindowComponent } from './mainwindow/mainwindow.component';
import { from } from 'rxjs';
import { MatiereComponent } from './mainwindow/matiere/matiere.component';
import { ProfesseurComponent } from './mainwindow/professeur/professeur.component';
import { AddMatiereComponent } from './mainwindow/matiere/add-matiere/add-matiere.component';
import { AddProfesseurComponent } from './mainwindow/professeur/add-professeur/add-professeur.component';
import { MatiereInventoryComponent } from './mainwindow/matiere/matiere-inventory/matiere-inventory.component';
import { ProfesseurInventoryComponent } from './mainwindow/professeur/professeur-inventory/professeur-inventory.component';
import {MatiereInventoryItemsComponent } from './mainwindow/matiere/matiere-inventory/matiere-inventory-items/matiere-inventory-items.component';
import { AddMatiereElementsComponent } from './mainwindow/matiere/add-matiere/add-matiere-elements/add-matiere-elements.component';
import { AddProfesseurElementsComponent } from './mainwindow/professeur/add-professeur/add-professeur-elements/add-professeur-elements.component';
import {ProfesseurInventoryItemsComponent } from './mainwindow/professeur/professeur-inventory/professeur-inventory-items/professeur-inventory-items.component';
import { AssignmentComponent } from './mainwindow/assignment/assignment.component';
import { AddAssignmentComponent } from './mainwindow/assignment/add-assignment/add-assignment.component';
import { AssignmentInventoryComponent } from './mainwindow/assignment/assignment-inventory/assignment-inventory.component';
import { AssignmentrInventoryComponent } from './mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory.component';
import { AddAssignmentElementsComponent } from './mainwindow/assignment/add-assignment/add-assignment-elements/add-assignment-elements.component';
import {AssignmentInventoryItemsComponent } from './mainwindow/assignment/assignment-inventory/assignment-inventory-items/assignment-inventory-items.component';
import {AssignmentrInventoryItemsComponent } from './mainwindow/assignmentr/assignmentr-inventory/assignmentr-inventory-items/assignmentr-inventory-items.component';
import { AssignmentComponentr } from './mainwindow/assignmentr/assignmentr.component';
import { AddAssignmentComponentr } from './mainwindow/assignmentr/add-assignmentr/add-assignmentr.component';
import { AddAssignmentElementsComponentr } from './mainwindow/assignmentr/add-assignmentr/add-assignmentr-elements/add-assignmentr-elements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { AssignmentFilterPipe } from './mainwindow/assignment/assignment-filter.pipe';
import { AssignmentrFilterPipe } from './mainwindow/assignmentr/assignmentr-filter.pipe';
import { MatiereFilterPipe } from './mainwindow/matiere/matiere-filter.pipe';
import { ProfesseurFilterPipe } from './mainwindow/professeur/professeur-filter.pipe';
import { XConfigurationSettingsAdminComponent } from './mainwindow/x-configuration-settings-admin/x-configuration-settings-admin.component';
import { ManageAccountComponent } from './mainwindow/x-configuration-settings-admin/manage-account/manage-account.component';
import { AddNewUsersComponent } from './mainwindow/x-configuration-settings-admin/add-new-users/add-new-users.component';
import { AddUserComponent } from './mainwindow/x-configuration-settings-admin/add-new-users/add-user/add-user.component';
import {MatCardModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';


const appRoutes: Routes =[
  { path: '',component:  LoginComponent},
  { path: 'main',component: MainwindowComponent},
  { path: 'matiere',component:  MatiereComponent },
  { path: 'assignments',component:  AssignmentComponent },
  { path: 'assignmentsr',component:  AssignmentComponentr },
  { path: 'professeur',component:  ProfesseurComponent },
  { path: 'settings',component:  XConfigurationSettingsAdminComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderUserdetailsComponent,
    HeaderTaskbarComponent,
    SidemenuComponent,
    MenuitemComponent,
    MainwindowComponent,
    MatiereComponent,
    AddMatiereComponent,
    MatiereInventoryComponent,
    AddMatiereElementsComponent,
    MatiereInventoryItemsComponent,
    ProfesseurComponent,
    AddProfesseurComponent,
    ProfesseurInventoryComponent,
    AddProfesseurElementsComponent,
    ProfesseurInventoryItemsComponent,
    AssignmentComponent,
    AddAssignmentComponent,
    AssignmentInventoryComponent,
    AddAssignmentElementsComponent,
    AssignmentInventoryItemsComponent,
    AssignmentComponentr,
    AddAssignmentComponentr,
   
    AddAssignmentElementsComponentr,
    AssignmentrInventoryComponent,
    AssignmentrInventoryItemsComponent,
    LoginComponent,
    SignupComponent,
    AssignmentFilterPipe,
    AssignmentrFilterPipe,
    MatiereFilterPipe,
    ProfesseurFilterPipe,
    XConfigurationSettingsAdminComponent,
    ManageAccountComponent,
    AddNewUsersComponent,
    AddUserComponent,


  ],
  entryComponents: [
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatInputModule,
    FormsModule,
    Ng2CarouselamosModule,
    MatFormFieldModule,
    MatSelectModule,
    GoogleChartsModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    MatCardModule,
    DragDropModule


  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor , multi: true},AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
