import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { RoundPipe } from '../shared/round.pipe';
import { ForecastComponent } from './forecast.component';
import { WeatherService } from '../shared/weather.service';

class MockWeatherService {
  getForecast(cityName) {
    return {
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
}

describe('ForecastComponent', () => {
  let component: ForecastComponent;
  let fixture: ComponentFixture<ForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule, MaterialModule ],
      providers: [ WeatherService ],
      declarations: [ ForecastComponent, RoundPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
