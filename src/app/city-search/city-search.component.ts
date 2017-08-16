import { Component, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import { WeatherService } from '../shared/weather.service';

const CITY_REGEX = /^[A-z ]+$/;

@Component({
  selector: 'wa-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent {
  city:string = '';
  httpFailed:boolean = false;
  httpErrorMessage:string;
  location: any;
  @Output() sendWeatherData = new EventEmitter();

  constructor(private weatherService:WeatherService) { }

  cityInput = new FormControl('', [Validators.required, Validators.pattern(CITY_REGEX)]);

  onSubmit(value:any): void{
    if(value != null && value != ''){
      this.weatherService.getWeather(value).subscribe(
        (data) => {
          this.httpFailed = false;
          this.sendWeatherData.emit(data);
        }, 
        (error) => {
          this.httpErrorMessage = error.message;
          this.httpFailed = true;
        }
      );
    }
  }

  getLocalWeather(): void{
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.getLocalWeather(lat, lon).subscribe(
        (data) => {
          this.httpFailed = false;
          this.city = data.name;
          this.sendWeatherData.emit(data);
        }, error => {
          this.httpFailed = true;
          this.httpErrorMessage = error.message;
        }
      );
    })
  }

}
