import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { LayoutModule } from 'src/app/client/layout/layout.module';
import { FilterPipe, FilterPipeDate } from 'src/app/client/page/commande/filter.pipe.etat';
import {  FilterDatePipe, FilterPipeClient, FilterPipeZone } from './filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommandeComponent,
    FilterDatePipe,
    FilterPipeZone,
    FilterPipeClient
    
    
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
    FormsModule
  ]
})
export class CommandeModule { }
