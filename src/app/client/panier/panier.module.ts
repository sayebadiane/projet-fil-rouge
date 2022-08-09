import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { PanierComponent } from './panier.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
    PanierRoutingModule,
    LayoutModule
  ]
})
export class PanierModule { }
