import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { Forecast } from '../forecast';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.less']
})
export class ForecastComponent implements OnInit {

  cityName: string = this.weatherService.cityName;
  cityForecast: Forecast[] = [];
  httpFailed: boolean = false;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    if(this.weatherService.cityName != ''){
      this.getForecast(this.cityName);
    }
  }

  getForecast(city){
    this.cityForecast.length = 0;
    this.weatherService.fiveDayForecast(city).subscribe(
      (data) => {
        this.httpFailed = false;
        this.cityName = this.weatherService.cityName;
        for(let i=0, arrLen=data.list.length; i<arrLen; i+=8){
          const tempVal = new Forecast(data.list[i].dt_txt,
                                      data.list[i].weather[0].icon,
                                      data.list[i].weather[0].description,
                                      data.list[i].main.temp_max,
                                      data.list[i].main.temp_min)
          this.cityForecast.push(tempVal);
        }
      },
          error => {
            this.httpFailed = true;
         }
    );
  }

}
