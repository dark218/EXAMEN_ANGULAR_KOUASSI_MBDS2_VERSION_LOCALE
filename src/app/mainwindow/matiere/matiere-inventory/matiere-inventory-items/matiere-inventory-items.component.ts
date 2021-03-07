import { MatSnackBar } from '@angular/material';
import { MatiereInteractionService } from '../../../matiere/matiere-interaction.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Matiere } from '../../matiere.model';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-matiere-inventory-items',
  templateUrl: './matiere-inventory-items.component.html',
  styleUrls: ['./matiere-inventory-items.component.css']
})
export class MatiereInventoryItemsComponent implements OnInit,OnDestroy {
  searchTerm : string;
  matieres: Matiere[] = [];
  isLoading= false;
  userIsAuthenticated = false;
  private matiereSubs: Subscription;
  private authStatusSub: Subscription;

  constructor(private matiereInteractionService: MatiereInteractionService, private authService: AuthService , private snackBar: MatSnackBar){}

  ngOnInit() {
    this.isLoading = true;
    this.matiereInteractionService.getMatiere();
    this.matiereSubs = this.matiereInteractionService.getMatiereUpdateListener()
      .subscribe((posts: Matiere[]) => {
        this.isLoading = false;
        this.matieres = posts;
      });

    this.userIsAuthenticated = this.authService.getIsAuth();

    this.authStatusSub = this.authService.getAuthStatusListener()
    .subscribe(isAuthenticated =>{
      this.userIsAuthenticated = isAuthenticated;
    });
  }

  onDelete(matiereId: string) {
    this.matiereInteractionService.deleteMatiere(matiereId);
    this.snackBar.open("Matiere Deleted Successfully", "Close");
  }

  ngOnDestroy() {
    this.matiereSubs.unsubscribe();
    this.authStatusSub.unsubscribe();
  }

}
