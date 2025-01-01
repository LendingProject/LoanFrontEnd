import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LandingViewComponent } from './landing-page/landing-view/landing-view.component';
import { RegisterModule } from './register/register.module';
import { RegistrationComponent } from './register/registration/registration.component';
import { WelcomePageComponent } from './landing-page/welcome-page/welcome-page.component';
import { AdminViewComponent } from './admin/admin-view/admin-view/admin-view.component';
import { AddLoanSchemeComponent } from './admin/add-loan-scheme/add-loan-scheme/add-loan-scheme.component';
import { UpdateLoanSchemeComponent } from './admin/admin-update-loanScheme/update-loan-scheme/update-loan-scheme.component';
import { ViewLoanSchemeComponent } from './admin/admin-view-loanScheme/view-loan-scheme/view-loan-scheme.component';
import { ViewLoanofficerReportComponent } from './admin/view-loanOfficer-report/view-loanofficer-report/view-loanofficer-report.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard/admin-dashboard.component';
import { ViewNpaComponent } from './admin/view-npa/view-npa/view-npa.component';
import { ViewCustomerComponent } from './admin/view-customer/view-customer/view-customer.component';
import { AddLoanOfficerComponent } from './admin/admin-loanOfficer/add-loan-officer/add-loan-officer.component';
import { ViewLoanOfficerComponent } from './admin/admin-view-loanOfficer/view-loan-officer/view-loan-officer.component';
import { ViewLoanRequestComponent } from './admin/view-loan-request/view-loan-request/view-loan-request.component';


const routes: Routes = [
  {
    path:"",
    component: LandingViewComponent,
    children:[
      {
        path:"login",
        component: LoginComponent
      },
      {
        path:"register",
        component: RegistrationComponent
      },
      {
        path:"welcome-page",
        component: WelcomePageComponent
      }
    ]
  },
  {
    path:"admin",
    component:AdminViewComponent,
    children:[
      {
        path:"admindashboard",
        component:AdminDashboardComponent
      },
      {
        path:"addloanscheme",
        component: AddLoanSchemeComponent
      },
      {
        path:"updateloanscheme",
        component:UpdateLoanSchemeComponent
      },
      {
        path:"viewloanscheme",
        component: ViewLoanSchemeComponent
      },
      {
        path:"report",
        component:ViewLoanofficerReportComponent

      },{
        path:"npa",
        component:ViewNpaComponent
      },{
        path:"customers",
        component:ViewCustomerComponent
      },
      {
        path:"addloanofficer",
        component:AddLoanOfficerComponent
      },
      {
        path:"manageloanofficer",
        component:ViewLoanOfficerComponent
      },
      {
        path:"viewloanRequest",
        component:ViewLoanRequestComponent

      }
     
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
