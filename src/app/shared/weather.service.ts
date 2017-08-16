import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { Weather } from './weather.model';

@Injectable()
export class WeatherService {

  constructor(private http:Http) { }

  getLocalWeather(lat:string, lon:string): Observable<Weather>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=727e663562878b71488b901a0bceef77&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  getWeather(cityName:string): Observable<Weather>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=727e663562878b71488b901a0bceef77&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  getFiveDayForecast(cityName:string): Observable<any>{
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=727e663562878b71488b901a0bceef77&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
      return Observable.throw(error.json() || 'Server Error');
  }

}
