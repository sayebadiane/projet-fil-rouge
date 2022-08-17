import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FootherAdminComponent } from './foother-admin/foother-admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderAdminComponent,
    FootherAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderAdminComponent,
    FootherAdminComponent
  ]
})
export class LayoutAdminModule { }
