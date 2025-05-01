import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private _apiKey = '5f8e556e94f3a781e75405a291d8175e';
  
  private _weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private _forecastApiUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  getWeatherByGeoLocation(lat: number, lon: number): Observable<any> {
    const url = `${this._weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${this._apiKey}&units=metric`;
    return this.http.get(url);
  }

  //3hours forecast - for five days
  getForecastByGeoLocation(lat: number, lon: number): Observable<any> {
    const url = `${this._forecastApiUrl}?lat=${lat}&lon=${lon}&appid=${this._apiKey}&units=metric`;
    return this.http.get<any>(url).pipe(
      map(response => response.list.slice(0,6)) 
    );
  }

}
