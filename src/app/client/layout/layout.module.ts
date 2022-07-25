import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootherComponent } from './foother/foother.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FootherComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FootherComponent
  ]
})
export class LayoutModule { }
