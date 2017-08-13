import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.less']
})
export class ForecastComponent implements OnInit {

  cityName: string = this.weatherService.cityName;
  cityForecast: any[] = [];
  httpFailed: boolean = false;

  constructor(private weatherService:WeatherService) { }

  ngOnInit() {
    this.getForecast(this.cityName);
  }

  getForecast(city){
    this.cityForecast.length = 0;
    this.weatherService.fiveDayForecast(city).subscribe(
      (data) => {
        this.httpFailed = false;
        this.cityName = this.weatherService.cityName;
        for(let i=0, arrLen=data.list.length; i<arrLen; i+=8){
          const tempVal = data.list[i];
          this.cityForecast.push(tempVal);
        }
      },
          error => {
            this.httpFailed = true;
         }
    );
  }

}
