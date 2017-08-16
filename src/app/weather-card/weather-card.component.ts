import { Component, Input } from '@angular/core';

import { Weather } from '../shared/weather.model';

@Component({
  selector: 'wa-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent {
  @Input() weatherData: Weather;
}
