import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LandingViewComponent } from './landing-page/landing-view/landing-view.component';
import { RegisterModule } from './register/register.module';
import { RegistrationComponent } from './register/registration/registration.component';
import { WelcomePageComponent } from './landing-page/welcome-page/welcome-page.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
