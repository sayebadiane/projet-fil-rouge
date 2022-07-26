import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { LayoutModule } from './layout/layout.module';
import { ImagebogyComponent } from './imagebogy/imagebogy.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ClientComponent,
    ImagebogyComponent,
    CatalogueComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    LayoutModule
  ]
})
export class ClientModule { }
