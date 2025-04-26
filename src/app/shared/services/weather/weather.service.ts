import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '5f8e556e94f3a781e75405a291d8175e';
  private weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';
  private _sevenDaysforecastApiUrl =
    'https://api.openweathermap.org/data/3.0/onecall';

  constructor(private http: HttpClient) {}

  getWeatherByGeoLocation(lat: number, lon: number): Observable<any> {
    const url = `${this.weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

  //3hours forecast - for five days
  getForecastByGeoLocation(lat: number, lon: number): Observable<any> {
    const url = `${this.forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }

}
