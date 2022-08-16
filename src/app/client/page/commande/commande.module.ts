import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { FilterPipe } from './filter.pipe.etat';


@NgModule({
  declarations: [
    CommandeComponent,
    FilterPipe

  ],
  imports: [
    CommonModule,
    CommandeRoutingModule
  ]
})
export class CommandeModule { }
