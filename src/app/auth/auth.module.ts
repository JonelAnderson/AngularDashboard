import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ResetComponent } from './password/reset/reset.component';



@NgModule({
  declarations: [
    ResetpasswordComponent,
    ResetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
