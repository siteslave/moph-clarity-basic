import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MainComponent } from './main/main.component';
import { NewUserComponent } from './new-user/new-user.component';
import { CreditComponent } from './credit/credit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent },
      // { path: 'main', component: MainComponent },
      { path: 'new', component: NewUserComponent }, // /admin/new
      { path: 'edit/:userId', component: NewUserComponent }, // /admin/edit/xxx
      { path: 'credit', component: CreditComponent }, // /admin/credit
      { path: '**', component: PageNotFoundComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
