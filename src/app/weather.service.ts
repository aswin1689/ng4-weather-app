import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  cityName:string = '';
  currentWeatherData:any;

  constructor(private http:Http) { }

  getLocalWeather(lat:string, lon:string): Observable<any>{
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=727e663562878b71488b901a0bceef77&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => {
      const data = res.json();
      this.currentWeatherData = data;
      this.cityName = data.name;
      return data;
    })
    .catch(this.handleError);
  }

  getWeather(cityName:string): Observable<any>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=727e663562878b71488b901a0bceef77&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => {
      const data = res.json();
      this.currentWeatherData = data;
      this.cityName = data.name;
      return data;
    })
    .catch(this.handleError);
  }

  fiveDayForecast(cityName:string): Observable<any>{
    let city = cityName != null ? cityName : this.cityName;
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=727e663562878b71488b901a0bceef77&units=imperial`;
    return this.http.get(url)
    .map((res:Response) => {
      const data = res.json();
      this.cityName = data.city.name;
      return data;
    })
    .catch(this.handleError);
  }

  private handleError(error: Response): Observable<any> {
      return Observable.throw(error.json() || 'Server Error');
  }

}
