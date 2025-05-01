import { Component } from '@angular/core';
import { WeatherService } from '../../shared/services/weather/weather.service';
import { Router } from '@angular/router';
import { GeoLocationService } from '../../shared/services/geo-location/geo-location.service';

@Component({
  selector: 'app-geo-loc-weather',
  standalone: false,
  templateUrl: './geo-loc-weather.component.html',
  styleUrl: './geo-loc-weather.component.scss',
})
export class GeoLocWeatherComponent {
  weatherData: any;
  latitude: number = 0;
  longitude: number = 0;

  constructor(private weatherService: WeatherService, private geoLocServicce: GeoLocationService, private router: Router) {}

  //fetch weather data
  ngOnInit(): void {
    this.startTracking();
    
  }

  startTracking() {
    this.geoLocServicce.startWatching(
      (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getGeoLocationWeather();
      },
      (error) => {
        this.weatherData = null;
        console.error('Geolocation error:', error.message);
      }
    );
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
        },
        error: (error) => {
        },
        complete: () => {},
      });
  }

  redirectToWeacther() {
    this.router.navigate(['/weather']);
  }

}
