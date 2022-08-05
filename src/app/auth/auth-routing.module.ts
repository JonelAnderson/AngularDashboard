import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './password/reset/reset.component';

const routes:Routes =[
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'reset', component: ResetComponent}
]


@NgModule({
 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AuthRoutingModule { }