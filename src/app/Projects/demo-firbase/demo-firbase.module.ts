import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoFirbaseRoutingModule } from './demo-firbase-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DemoFirbaseRoutingModule,
    ReactiveFormsModule,
    // AngularFireModule.initializeApp(environment.firbase),
    // AngularFireAuthModule
  ]
})
export class DemoFirbaseModule { }
