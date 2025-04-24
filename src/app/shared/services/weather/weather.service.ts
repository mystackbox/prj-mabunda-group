import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  private apiKey = '5f8e556e94f3a781e75405a291d8175e';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
