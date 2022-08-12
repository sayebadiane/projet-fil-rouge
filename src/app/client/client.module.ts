import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { LayoutModule } from './layout/layout.module';
import { ImagebogyComponent } from './imagebogy/imagebogy.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CardComponent } from './card/card.component';
import { ListeCadrdeComponent } from './liste-cadrde/liste-cadrde.component';
import { RouterModule } from '@angular/router';
import { QuantiteComponent } from './detail/quantite/quantite.component';
import { NgToastModule } from 'ng-angular-popup';


@NgModule({
  declarations: [
    ClientComponent,
    ImagebogyComponent,
    CatalogueComponent,
    CardComponent,
    ListeCadrdeComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule,
    RouterModule,
    NgToastModule
  ],
  exports: [
    ListeCadrdeComponent,
    ImagebogyComponent,
  ]
  
})
export class ClientModule { }
