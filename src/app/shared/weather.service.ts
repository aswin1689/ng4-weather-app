import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Weather } from './weather.model';
import { Forecast } from './forecast.model';

@Injectable()
export class WeatherService {

  private baseURL: string = "http://api.openweathermap.org/data/2.5/";
  private apiKey: string = "727e663562878b71488b901a0bceef77";

  constructor(private http:Http) { }

  getLocalWeather(lat:string, lon:string): Observable<Weather>{
    const url = `${this.baseURL}weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  getWeather(cityName:string): Observable<Weather>{
    const url = `${this.baseURL}weather?q=${cityName}&appid=${this.apiKey}&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  getFiveDayForecast(cityName:string): Observable<Forecast>{
    const url = `${this.baseURL}forecast?q=${cityName}&appid=${this.apiKey}&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => res.json())
    .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
      return Observable.throw(error.json() || 'Server Error');
  }

}
