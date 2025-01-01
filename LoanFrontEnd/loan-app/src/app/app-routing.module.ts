import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LandingViewComponent } from './landing-page/landing-view/landing-view.component';
import { RegisterModule } from './register/register.module';
import { RegistrationComponent } from './register/registration/registration.component';
import { WelcomePageComponent } from './landing-page/welcome-page/welcome-page.component';
import { UserdashboardComponent } from './user/userdashboard/userdashboard.component';
import { LoanschemesComponent } from './user/loanschemes/loanschemes.component';
import { PaymentComponent } from './user/payment/payment.component';
import { QueriesComponent } from './user/queries/queries.component';
import { ApplyloanComponent } from './user/applyloan/applyloan.component';
import { AllappliedloanComponent } from './user/allappliedloan/allappliedloan.component';
// import { PayemiComponent } from './user/payemi/payemi.component';

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
      },
      {
        path:"userdashboard",
        component:UserdashboardComponent,
        children:[
          {
            path:"loanschemes",
            component: LoanschemesComponent,
            children:[
              {
                path:"applyloan",
                component:ApplyloanComponent
              }
            ]
          },
          // {
          //   path:"payemi",
          //   component: PayemiComponent
          // }
          {
            path:"payment",
            component: PaymentComponent
          },
          {
            path:"queries",
            component:QueriesComponent
          },
          {
            path:"appliedloans",
            component:AllappliedloanComponent
          }
         
        
        ]
      },
      
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
