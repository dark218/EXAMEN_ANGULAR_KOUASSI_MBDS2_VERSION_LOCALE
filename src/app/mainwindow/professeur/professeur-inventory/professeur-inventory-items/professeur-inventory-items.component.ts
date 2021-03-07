import { MatSnackBar } from '@angular/material';
import { ProfesseurInteractionService } from '../../../professeur/professeur-interaction.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Professeur } from '../../professeur.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-professeur-inventory-items',
  templateUrl: './professeur-inventory-items.component.html',
  styleUrls: ['./professeur-inventory-items.component.css']
})
export class ProfesseurInventoryItemsComponent implements OnInit,OnDestroy {
  searchTerm : string;
  professeurs: Professeur[] = [];
  isLoading= false;
  userIsAuthenticated = false;
  private professeurSubs: Subscription;
  private authStatusSub: Subscription;

  constructor(private professeurInteractionService: ProfesseurInteractionService, private authService: AuthService , private snackBar: MatSnackBar){}

  ngOnInit() {
    this.isLoading = true;
    this.professeurInteractionService.getProfesseur();
    this.professeurSubs = this.professeurInteractionService.getProfesseurUpdateListener()
      .subscribe((posts: Professeur[]) => {
        this.isLoading = false;
        this.professeurs = posts;
      });

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onDelete(professeurId: string) {
    this.professeurInteractionService.deleteProfesseur(professeurId);
    this.snackBar.open("professeur Deleted Successfully", "Close");
  }

  ngOnDestroy() {
    this.professeurSubs.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
