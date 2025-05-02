import { Component } from '@angular/core';
import { WeatherService } from '../../shared/services/weather/weather.service';
import { Router } from '@angular/router';
import { GeoLocationService } from '../../shared/services/geo-location/geo-location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-geo-loc-weather',
  standalone: false,
  templateUrl: './geo-loc-weather.component.html',
  styleUrl: './geo-loc-weather.component.scss',
})
export class GeoLocWeatherComponent {
  weatherData: any;
  latitude: number;
  longitude: number;

  geoLocErr: string | null = null;

  private _posSub?: Subscription;
  private _errSub?: Subscription;
  private _weather?: Subscription;

  constructor(
    private _weatherService: WeatherService,
    private _geoLocService: GeoLocationService,
    private _router: Router
  ) {
    this.latitude = -0;
    this.longitude = -0;
  }

  //fetch weather data
  ngOnInit(): void {
    //start watching geo-location position updates/changes
    this._geoLocService.startMonitoring();

    //get device current geo-location
    this._posSub = this._geoLocService.position$.subscribe((position) => {
      if (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;

        this.getGeoLocationWeather();
        this.geoLocErr = null;
      }
    });

    this._errSub = this._geoLocService.error$.subscribe((err) => {
      this.geoLocErr = err;
    });
  }

  //get current geolocation weather
  getGeoLocationWeather() {
    this._weatherService
      .getWeatherByGeoLocation(this.latitude, this.longitude)
      .subscribe({
        next: (data) => {
          this.weatherData = data;
        },
        error: (error) => {},
        complete: () => {},
      });
  }

  redirectToWeacther() {
    this._router.navigate(['/weather']);
  }

  //unsubscribe before destroying the component
  ngOnDestroy() {
    this._geoLocService.stopMonitoring();
    this._posSub?.unsubscribe();
    this._errSub?.unsubscribe();
    this._weather?.unsubscribe();
    this._errSub?.unsubscribe();
  }
}
