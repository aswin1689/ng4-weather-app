import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WeatherService } from '../weather.service';
import { CurrentWeather } from '../current-weather';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.less']
})
export class CurrentComponent{
  currentWeather:CurrentWeather;
  location;
  httpFailed: boolean = false;

  constructor(private weatherService:WeatherService) { }

  onSubmit(weatherForm:NgForm){
    this.weatherService.getWeather(weatherForm.value.city).subscribe((data) => {
      this.httpFailed = false;
      this.currentWeather = new CurrentWeather(data.name, 
                                                  data.main.temp, 
                                                  data.weather[0].icon,
                                                  data.weather[0].description,
                                                  data.main.temp_max, 
                                                  data.main.temp_min)
    }, error => {
      this.httpFailed = true;
    })
  }

}
