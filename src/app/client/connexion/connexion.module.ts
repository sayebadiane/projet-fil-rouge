import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import { LayoutModule } from '../layout/layout.module';
import { ConnecterComponent } from './connecter/connecter.component';


@NgModule({
  declarations: [
    ConnexionComponent,
    ConnecterComponent
  ],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    LayoutModule
  ]
})
export class ConnexionModule { }
