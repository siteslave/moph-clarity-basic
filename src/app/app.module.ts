import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClarityModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
