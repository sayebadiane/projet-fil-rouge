import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListerCommandeLivraisonComponent } from './lister-commande-livraison/lister-commande-livraison.component';
import { LivraisonComponent } from './livraison.component';

const routes: Routes = [
  { path: '', component: LivraisonComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivraisonRoutingModule { }
