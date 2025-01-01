import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSearchFilterModule } from 'ngx-search-filter';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AdminModule,LoanOfficerModule,LoginModule,ServicesModule,ReactiveFormsModule,
    HttpClientModule,LandingPageModule,RegisterModule,FormsModule,NgxSearchFilterModule
  ],
  providers: [{ 
    provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor, 
    multi: true, 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
