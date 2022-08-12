import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import { LayoutModule } from '../../layout/layout.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    LayoutModule,
    FormsModule

  ]
})
export class ConnexionModule { }
