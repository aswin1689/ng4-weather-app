import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.less']
})
export class CurrentComponent implements OnInit{
  location;
  httpFailed: boolean = false;
  weatherData;

  constructor(private weatherService:WeatherService) { }

  ngOnInit(){
    this.weatherData = this.weatherService.currentWeatherData;
  }

  handleWeatherData(data){
    this.weatherData = data;
  }

  getLocalWeather(){
    navigator.geolocation.getCurrentPosition((pos) => {
      this.location = pos.coords;
      const lat = this.location.latitude;
      const lon = this.location.longitude;
      this.weatherService.getLocalWeather(lat, lon).subscribe(
        (data) => {
          this.weatherData = data;
          this.httpFailed = false;
        }, (error) => {
          this.httpFailed = true;
        }
      );
    })
  }

}
