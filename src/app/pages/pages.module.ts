import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BillingComponent } from './account/billing/billing.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    BillingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboardComponent,
    BillingComponent
  ]
})
export class PagesModule { }
