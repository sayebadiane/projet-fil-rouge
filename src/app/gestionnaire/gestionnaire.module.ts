import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { GestionnaireComponent } from './gestionnaire.component';
import { LayoutModule } from '../client/layout/layout.module';
import { ClientRoutingModule } from '../client/client-routing.module';


@NgModule({
  declarations: [
    GestionnaireComponent
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule,
    LayoutModule,
    ClientRoutingModule,

  ]
})
export class GestionnaireModule { }
