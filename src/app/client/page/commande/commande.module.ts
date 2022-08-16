import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { FilterPipe, FilterPipeDate } from './filter.pipe.etat';
import { LayoutModule } from '../../layout/layout.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CommandeComponent,
    FilterPipe,
    FilterPipeDate

  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
   FormsModule
  ]
})
export class CommandeModule { }
