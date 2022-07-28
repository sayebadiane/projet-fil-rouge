import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootherComponent } from './foother/foother.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ClientModule } from '../client.module';



@NgModule({
  declarations: [
    FootherComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    
    
  ],
  exports: [
    HeaderComponent,
    FootherComponent
  ]
})
export class LayoutModule { }
