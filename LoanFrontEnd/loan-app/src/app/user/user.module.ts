import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { LoanschemesComponent } from './loanschemes/loanschemes.component';
import { RouterModule } from '@angular/router'; 
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PaymentComponent } from './payment/payment.component'; 
import { FormsModule } from '@angular/forms';
import { QueriesComponent } from './queries/queries.component';
import { ApplyloanComponent } from './applyloan/applyloan.component';
import { AllappliedloanComponent } from './allappliedloan/allappliedloan.component';
 
@NgModule({
  declarations: [
    UserdashboardComponent,
    LoanschemesComponent,
    PaymentComponent,
    QueriesComponent,
    ApplyloanComponent,
    AllappliedloanComponent,
    
   
   
  ],
  imports: [
    CommonModule,RouterModule,AppRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class UserModule { }
