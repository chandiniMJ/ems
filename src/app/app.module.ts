import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import { AddComponent } from './add/add.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EMSComponent } from './ems/ems.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AddComponent,
    SignInComponent,
    EMSComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
