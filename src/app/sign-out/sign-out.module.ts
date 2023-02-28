import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SignOutRoutingModule } from './sign-out-routing.module';



@NgModule({
  declarations: [
    SignOutComponent
  ],
  imports: [
    CommonModule,
    SignOutRoutingModule
  ]
})
export class SignOutModule { }
