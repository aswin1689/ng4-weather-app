import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/Router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrentComponent } from './current/current.component';
import { ForecastComponent } from './forecast/forecast.component';
import { appRoutes } from './app.routes';
import { WeatherService } from './weather.service';
import { RoundPipe } from './round.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { InputSearchComponent } from './input-search/input-search.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrentComponent,
    ForecastComponent,
    RoundPipe,
    CapitalizePipe,
    InputSearchComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
