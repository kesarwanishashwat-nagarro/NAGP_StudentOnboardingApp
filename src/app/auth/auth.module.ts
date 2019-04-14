import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LogincontainerComponent } from './logincontainer/logincontainer.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [LandingComponent, LogincontainerComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
