import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CitySearchComponent } from './city-search.component';
import { WeatherService } from '../shared/weather.service';

class MockWeatherService {
  getWeather(cityName) {
    return {"name": "London", "main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04}}
  }
}

describe('CitySearchComponent', () => {
  let component: CitySearchComponent;
  let fixture: ComponentFixture<CitySearchComponent>;
  let mockWeatherService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule ],
      providers: [{ provide: WeatherService, useClass: MockWeatherService }],
      declarations: [ CitySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitySearchComponent);
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
