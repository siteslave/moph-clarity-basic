declare var require: any;
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CreditComponent } from './credit/credit.component';
import { LayoutComponent } from './layout/layout.component';
import { UserService } from './user.service';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from '../services/auth-guard.service';
import { ToSexNamePipe } from '../to-sex-name.pipe';
import { ToThaiDatePipe } from '../to-thai-date.pipe';
import { YellowTextDirective } from './yellow-text.directive';
import { DirectivesModule } from '../directives/directives.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartModule } from 'angular2-highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';

import { AgmCoreModule } from '@agm/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { environment } from './../../environments/environment';

import { MapsComponent } from './maps/maps.component';
import { SocketService } from '../socket.service';

const config: SocketIoConfig = { url: environment.apiUrl, options: {} };

export function highchartsFactory() {
  return require('highcharts');
}

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ClarityModule,
    FormsModule,
    DirectivesModule,
    ChartModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAtEQEREbuwvqsDQsmvt-o8zGtMkbIragc',
      libraries: ['places']
    }),
    SocketIoModule.forRoot(config)
  ],
  declarations: [
    MainComponent,
    PageNotFoundComponent,
    NewUserComponent,
    CreditComponent,
    LayoutComponent,
    ToSexNamePipe,
    ToThaiDatePipe,
    YellowTextDirective,
    DashboardComponent,
    MapsComponent
  ],
  providers: [
    UserService,
    SocketService,
    AuthGuardService,
    { provide: HighchartsStatic, useFactory: highchartsFactory} 
  ]
})
export class AdminModule { }
