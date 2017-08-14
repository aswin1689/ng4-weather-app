import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { InputSearchComponent } from './input-search.component';
import { WeatherService } from '../weather.service';

class MockWeatherService {
  getWeather(cityName) {
    return {"name": "London", "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04}}
  }
}

describe('InputSearchComponent', () => {
  let component: InputSearchComponent;
  let fixture: ComponentFixture<InputSearchComponent>;
  let mockWeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      providers: [{ provide: WeatherService, useClass: MockWeatherService }],
      declarations: [ InputSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSearchComponent);
    component = fixture.componentInstance;
    mockWeatherService = new MockWeatherService();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('get weather data on clicking submit button', () => {
    mockWeatherService.getWeather('London');
    fixture.detectChanges();
    expect(mockWeatherService.getWeather('London').main.temp).toBe(289.5);
  });
});
