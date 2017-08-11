import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { CurrentWeather } from './current-weather';
import { Forecast } from './forecast';

@Injectable()
export class WeatherService {
  currentWeather:CurrentWeather;
  constructor(private http:Http) { }

  getWeather(cityName:string): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=727e663562878b71488b901a0bceef77&units=imperial`)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  fiveDayForecast(cityName:string): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=727e663562878b71488b901a0bceef77&units=imperial`)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
      return Observable.throw(error.json().error || 'Server error');
  }

}
