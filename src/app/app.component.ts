import { Component } from '@angular/core';

import { Weather } from './shared/weather.model';

@Component({
  selector: 'wa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  weatherData: Weather;

  handleWeatherData(data){
    this.weatherData = data;
  }
}
