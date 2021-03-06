import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EMSComponent } from './ems/ems.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';


const routes: Routes = [
  {path:"", redirectTo:"ems",pathMatch:"full"},
  {path:"ems", component: EMSComponent },
  {path:"register", component:RegistrationComponent},
  {path:"signin", component:SignInComponent},
  {path:"add",component:AddComponent},
  {path:"**", component:EMSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
