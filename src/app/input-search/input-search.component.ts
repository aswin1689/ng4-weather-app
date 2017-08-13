import { Component, Output, EventEmitter } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.less']
})
export class InputSearchComponent {
  weatherData;
  cityName:string = this.weatherService.cityName;
  @Output() sendWeatherData = new EventEmitter();


  constructor(private weatherService:WeatherService) { }

  onSubmit(value:any){
    this.weatherService.getWeather(value).subscribe((data) => {
    this.sendWeatherData.emit(data);
    });
  }

}
