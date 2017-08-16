import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/Router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ForecastComponent } from './forecast/forecast.component';
import { appRoutes } from './app.routes';
import { WeatherService } from './shared/weather.service';
import { RoundPipe } from './shared/round.pipe';
import { CitySearchComponent } from './city-search/city-search.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    RoundPipe,
    CitySearchComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
