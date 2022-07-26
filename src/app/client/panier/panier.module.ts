import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanierRoutingModule } from './panier-routing.module';
import { PanierComponent } from './panier.component';
import { LayoutModule } from '../layout/layout.module';
import { DetailModule } from '../detail/detail.module';
import { PanierBurgerComponent } from './panier-burger/panier-burger.component';
import { PanierMenuComponent } from './panier-menu/panier-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PanierComponent,
    PanierBurgerComponent,
    PanierMenuComponent,
  
  ],
  imports: [
    CommonModule,
    PanierRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule

    
    
  
  ]
})
export class PanierModule { }
