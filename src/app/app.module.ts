import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterModule } from '@angular/router';
import { NgToastModule } from 'ng-angular-popup' 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleInterceptor } from './client/shared/interceptor/ExampleInterceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgToastModule,
    HttpClientModule
    
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ExampleInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
