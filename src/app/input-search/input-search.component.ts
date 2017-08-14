import { Component, Output, EventEmitter } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.less']
})
export class InputSearchComponent {
  cityName:string = this.weatherService.cityName;
  httpFailed:boolean = false;
  httpErrorMessage:string;
  @Output() sendWeatherData = new EventEmitter();

  constructor(private weatherService:WeatherService) { }

  onSubmit(value:any){
    this.weatherService.getWeather(value).subscribe(
      (data) => {
        this.httpFailed = false;
        this.sendWeatherData.emit(data);
      }, 
      (error) => {
        this.httpErrorMessage = error.message;
        this.httpFailed = true;
      });
  }

}
