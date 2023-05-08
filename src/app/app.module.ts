import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveFormComponent } from './mini-projects/reactive-form/reactive-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthIntercepteurService } from './Services/auth-intercepteur.service';
import { LayoutComponent } from './Projects/zero-to-Hero-film-project/layout/layout.component';
import { LoginComponent } from './Projects/zero-to-Hero-film-project/login/login.component';
import { HomeComponent } from './Projects/zero-to-Hero-film-project/home/home.component';
import { FilmComponent } from './Projects/zero-to-Hero-film-project/Components/film/film.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS ,
      useClass: AuthIntercepteurService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
