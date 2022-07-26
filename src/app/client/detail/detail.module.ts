import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { LayoutModule } from '../layout/layout.module';
import { QuantiteComponent } from './quantite/quantite.component';
import { CardComponent } from '../card/card.component';


@NgModule({
  declarations: [
    DetailComponent,
    DetailBurgerComponent,
    QuantiteComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    LayoutModule,

    
  ],
  exports: [
    DetailBurgerComponent,


    
  ]
})
export class DetailModule { }
