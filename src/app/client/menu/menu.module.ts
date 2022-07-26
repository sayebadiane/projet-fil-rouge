import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { ListeMenuComponent } from './liste-menu/liste-menu.component';
import { LayoutModule } from '../layout/layout.module';
import { ClientModule } from '../client.module';


@NgModule({
  declarations: [
    MenuComponent,
    ListeMenuComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    LayoutModule,
    ClientModule
  ]
})
export class MenuModule { }
