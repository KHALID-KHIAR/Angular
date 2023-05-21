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
import { MouviePageComponent } from './Projects/zero-to-Hero-film-project/Components/mouvie-page/mouvie-page.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartLayoutComponent } from './mini-projects/charts/chart-layout/chart-layout.component';
import { LineChartComponent } from './mini-projects/charts/line-chart/line-chart.component';
import { PieChartComponent } from './mini-projects/charts/pie-chart/pie-chart.component';
import { BarChartComponent } from './mini-projects/charts/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './mini-projects/charts/doughnut-chart/doughnut-chart.component';
import { PolarAreaChartComponent } from './mini-projects/charts/polar-area-chart/polar-area-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    FilmComponent,
    MouviePageComponent,
    ChartLayoutComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    PolarAreaChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule
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
