import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { DetailBurgerComponent } from './detail-burger/detail-burger.component';
import { LayoutModule } from '../layout/layout.module';
import { QuantiteComponent } from './quantite/quantite.component';
import { CardComponent } from '../card/card.component';
import { CardBoisonComponent } from './card-boison/card-boison.component';
import { RouterModule } from '@angular/router';
import { DetailmenuComponent } from './detailmenu/detailmenu.component';
import { DetailMenuBurgerComponent } from './detail-menu-burger/detail-menu-burger.component';

@NgModule({
  declarations: [
    DetailComponent,
    DetailBurgerComponent,
    QuantiteComponent,
    CardBoisonComponent,
    DetailmenuComponent,
    DetailMenuBurgerComponent,
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    LayoutModule,
    RouterModule

    
  ],
  exports: [
    DetailBurgerComponent,


    
  ]
})
export class DetailModule { }
