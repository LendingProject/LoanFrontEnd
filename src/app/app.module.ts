import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { LoanOfficerModule } from './loan-officer/loan-officer.module';
import { LoginModule } from './login/login.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './jwt.interceptor';
import { LoginService } from './services/login/login.service';
import { ServicesModule } from './services/services.module';
import { LoginComponent } from './login/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageModule } from './landing-page/landing-page.module';
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminModule,CustomerModule,LoanOfficerModule,LoginModule,ServicesModule,ReactiveFormsModule,
    HttpClientModule,LandingPageModule,RegisterModule
  ],
  providers: [{ 
    provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor, 
    multi: true, 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
