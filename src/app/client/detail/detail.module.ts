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
import { DetailBoissonMenuComponent } from './detail-boisson-menu/detail-boisson-menu.component';
import { DetailPortionFriteComponent } from './detail-portion-frite/detail-portion-frite.component';
import { FriteComponent } from './frite/frite.component';

@NgModule({
  declarations: [
    DetailComponent,
    DetailBurgerComponent,
    QuantiteComponent,
    CardBoisonComponent,
    DetailmenuComponent,
    DetailMenuBurgerComponent,
    DetailBoissonMenuComponent,
    DetailPortionFriteComponent,
    FriteComponent,
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
