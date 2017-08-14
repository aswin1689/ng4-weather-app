import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.less']
})
export class WeatherCardComponent {
  @Input() weatherData:any;
}
