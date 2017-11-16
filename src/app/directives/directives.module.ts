import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypesComponent } from './user-types/user-types.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';
import { UserService } from '../admin/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule
  ],
  declarations: [UserTypesComponent],
  providers: [UserService],
  exports: [UserTypesComponent]
})
export class DirectivesModule { }
