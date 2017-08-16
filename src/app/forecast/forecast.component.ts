import { Component, OnChanges, Input } from '@angular/core';

import { Forecast } from '../shared/forecast.model';
import { WeatherService } from '../shared/weather.service';

@Component({
  selector: 'wa-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnChanges {

  @Input() weatherData: any = {};
  cityForecast: Forecast[] = [];
  httpFailed: boolean = false;

  constructor(private weatherService:WeatherService) { }

  ngOnChanges(changes: any){
    if(changes.weatherData.currentValue.name){
      this.getForecast(changes.weatherData.currentValue.name);
    }
  }

  getForecast(city): void{
    this.cityForecast.length = 0;
    this.weatherService.getFiveDayForecast(city).subscribe(
      (data) => {
        this.httpFailed = false;
        this.cityForecast.length = 0;
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
