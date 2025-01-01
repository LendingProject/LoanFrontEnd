import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login/login.service';
import { NpaServiceService } from './npa/npa-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoginService,NpaServiceService
  ]
})
export class ServicesModule { }
