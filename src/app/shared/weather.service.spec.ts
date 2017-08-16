import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';

import { WeatherService } from './weather.service';

describe('WeatherService ', () => {
    let mockBackend: MockBackend;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                WeatherService,
                MockBackend,
            ],
            imports: [
                HttpModule
            ]
        });
        mockBackend = getTestBed().get(MockBackend);
    });

    it('expect WeatherService to be defined', 
        inject([WeatherService], (service:WeatherService) => {
          expect(service).toBeTruthy();
        })
    );

    it('should get weather data by city name for London',
    async(inject([WeatherService], (weatherService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: {"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Haze","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"GB","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"London","cod":200}
              }
            )));
        });

      weatherService.getWeather('London').subscribe(
        (data) => {
          expect(data).toBeDefined();
          expect(data.name).toBe('London');
      });
    })));

    it('should get weather data by latitude and longitude for Shuzenji',
    async(inject([WeatherService], (weatherService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: {"coord":{"lon":139,"lat":35},
                        "weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
                        "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
                        "name":"Shuzenji"}
              }
            )));
        });

      weatherService.getLocalWeather('35', '139').subscribe(
        (data) => {
          expect(data).toBeDefined();
          expect(data.name).toBe('Shuzenji');
          expect(data.coord.lon).toBe(139);
          expect(data.coord.lat).toBe(35);
      });
    })));

    it('should get 5 day Forecast weather data by city name for Altstadt',
    async(inject([WeatherService], (weatherService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: {
  "cod": "200",
  "message": 0.0032,
  "cnt": 36,
  "list": [
    {
      "dt": 1487257200,
      "main": {
        "temp": 285.66,
        "temp_min": 281.821,
        "temp_max": 285.66,
        "pressure": 970.91,
        "sea_level": 1044.32,
        "grnd_level": 970.91,
        "humidity": 70,
        "temp_kf": 3.84
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 0
      },
      "wind": {
        "speed": 1.59,
        "deg": 290.501
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2017-02-16 15:00:00"
    }],
  "city": {
    "id": 6940463,
    "name": "Altstadt",
    "coord": {
      "lat": 53.6281,
      "lon": 11.4158
    },
    "country": "none"
  }
}
              }
            )));
        });

      weatherService.getFiveDayForecast('Altstadt').subscribe(
        (data) => {
          expect(data).toBeDefined();
          expect(data.city.name).toBe('Altstadt');
          expect(data.city.coord.lon).toBe(11.4158);
          expect(data.city.coord.lat).toBe(53.6281);
      });
    })));

});