import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { LandingHeaderComponent } from './landing-header/landing-header.component';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { AppRoutingModule } from '../app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FooterComponent } from './footer/footer/footer.component';



@NgModule({
  declarations: [
    LandingViewComponent,
    LandingHeaderComponent,
    WelcomePageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,LoginModule,RegisterModule,AppRoutingModule
  ],
  exports: [FooterComponent] 
})
export class LandingPageModule { }
