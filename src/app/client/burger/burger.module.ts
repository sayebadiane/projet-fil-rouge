import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurgerRoutingModule } from './burger-routing.module';
import { BurgerComponent } from './burger.component';
import { ListeBurgerComponent } from './liste-burger/liste-burger.component';
import { LayoutModule } from '../layout/layout.module';
import { ListeCadrdeComponent } from '../liste-cadrde/liste-cadrde.component';
import { ClientModule } from '../client.module';


@NgModule({
  declarations: [
    BurgerComponent,
    ListeBurgerComponent,


  ],
  imports: [
    CommonModule,
    BurgerRoutingModule,
    LayoutModule,
    ClientModule
  ]
  
})
export class BurgerModule { }
