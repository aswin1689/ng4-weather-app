import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CurrentComponent } from './current.component';
import { WeatherService } from '../weather.service';

class MockWeatherService {
  public currentWeatherData = {"city": "London", "temp": 72.35}

  getLocalWeather(lat, lon){
    return {"coord":{"lon":139,"lat":35},
                        "weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
                        "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
                        "name":"Shuzenji"
                      }
                    }
                
}

describe('CurrentComponent', () => {
  let component: CurrentComponent;
  let fixture: ComponentFixture<CurrentComponent>;
  let mockWeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: [ WeatherService ],
      declarations: [ CurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentComponent);
    component = fixture.componentInstance;
    mockWeatherService = new MockWeatherService();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should get weather data from weather service', () => {
    expect(mockWeatherService.currentWeatherData.city).toBe('London');
  });

  it('should get local weather data when getLocalWeather() is called', () => {
    expect(mockWeatherService.getLocalWeather(35, 139).name).toBe("Shuzenji");
  });
});
