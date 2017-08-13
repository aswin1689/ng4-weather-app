import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.less']
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherData;
  constructor() { }

  ngOnInit() {
    this.weatherData = this.weatherData;
  }

}
