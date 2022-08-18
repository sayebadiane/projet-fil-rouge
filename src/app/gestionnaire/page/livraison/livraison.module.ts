import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivraisonRoutingModule } from './livraison-routing.module';
import { LivraisonComponent } from './livraison.component';
import { LayoutAdminModule } from '../../layout-admin/layout-admin.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListerCommandeLivraisonComponent } from './lister-commande-livraison/lister-commande-livraison.component';


@NgModule({
  declarations: [
    LivraisonComponent,
    ListerCommandeLivraisonComponent
  ],
  imports: [
    CommonModule,
    LivraisonRoutingModule,
    LayoutAdminModule,
    RouterModule,
    FormsModule
  ]
})
export class LivraisonModule { }
