import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { LayoutModule } from './layout/layout.module';
import { ImagebogyComponent } from './imagebogy/imagebogy.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CardComponent } from './card/card.component';
import { ListeCadrdeComponent } from './liste-cadrde/liste-cadrde.component';


@NgModule({
  declarations: [
    ClientComponent,
    ImagebogyComponent,
    CatalogueComponent,
    CardComponent,
    ListeCadrdeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule
  ],
  exports: [
    ListeCadrdeComponent,
    ImagebogyComponent
  ]
  
})
export class ClientModule { }
