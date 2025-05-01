import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../shared/services/weather/weather.service';
import { Router } from '@angular/router';
import { GeoLocationService } from '../../../../shared/services/geo-location/geo-location.service';
import { error } from 'console';

@Component({
  selector: 'app-weather',
  standalone: false,
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  weatherData: any;
  forecastData: any;
  todayDate: any;
  responseErr: any;
  geoLocErr: any;
  latitude: number = 0;
  longitude: number = 0;
  _loading: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private geoLocServicce: GeoLocationService,
    private router: Router
  ) {}

  //fetch weather data
  ngOnInit(): void {
    this.todayDate = new Date();
    this._loading = true;
    this.startTracking(); 
    console.log('called from weather component')
  }

  startTracking() {
    this.geoLocServicce.startWatching(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getGeoLocationWeather();
        this.getGeoLocationForecast();
        console.log('Updated position from Weather component:', this.latitude, this.longitude);
      },
      (error) => {
        this.geoLocErr = error;
        this.weatherData = null;
        this.forecastData = null;
        console.error('Geolocation error:', error.code);
      }
    );
    this._loading = false;
  }


  ngOnDestroy(): void {
    this.geoLocServicce.stopWatching();
  }

  //get current geolocation weather
  getGeoLocationWeather() {
    this.weatherService
      .getWeatherByGeoLocation(this.latitude, this.longitude)
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          this.responseErr = null;
        },
        error: (error) => {
          this.responseErr = 'Fetching Data Failed';
        },
        complete: () => {},
      });
  }

  //get current geolocation forecast
  getGeoLocationForecast() {
    this.weatherService
      .getForecastByGeoLocation(this.latitude, this.longitude)
      .subscribe({
        next: (data) => {
          this.forecastData = data;
          this.responseErr = null;
        },
        error: (error) => {
          this.responseErr = 'Fetching Data Failed';
        },
        complete: () => {},
      });
  }

  //reditect to contact us page
  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }
}
