
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import 'clarity-icons';
import 'clarity-icons/shapes/all-shapes';

import { LoginModule } from './login/login.module';
import { environment } from './../environments/environment';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { JwtHelper } from 'angular2-jwt';
import { ToSexNamePipe } from './to-sex-name.pipe';
import { ToThaiDatePipe } from './to-thai-date.pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    LoginModule,
    AdminModule,
    AuthModule,
  ],
  providers: [
    JwtHelper,
    {provide: 'API_URL', useValue: environment.apiUrl},
    { provide: LocationStrategy, useClass: HashLocationStrategy }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
