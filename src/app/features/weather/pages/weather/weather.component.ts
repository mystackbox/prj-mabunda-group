import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../shared/services/weather/weather.service';
import { Router } from '@angular/router';
import { GeoLocationService } from '../../../../shared/services/geo-location/geo-location.service';
import { Subscription } from 'rxjs';

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
  loading: boolean = false;

  latitude: number;
  longitude: number;
  geoLocErr: string | null = null;

  private _posSub?: Subscription;
  private _errSub?: Subscription;
  private _forecast?: Subscription;
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
    //current date
    this.todayDate = new Date();

    //start watching geo-location position updates/changes
    this._geoLocService.startMonitoring();

    this.loadingStatus();
    
    //get device current geo-location
    this._posSub = this._geoLocService.position$.subscribe((position) => {
      if (position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getGeoLocationWeather();
        this.getGeoLocationForecast();
        console.log('Weather component loaded...')
        this.geoLocErr = null;
      }
    });

    //subscribe to geo-loc errors
    this._errSub = this._geoLocService.error$.subscribe((err) => {
      this.geoLocErr = err;
    });
  }

  loadingStatus(){
    this.loading = true;
  }

  //get current geo-location weather data
  getGeoLocationWeather() {
    this._weather = this._weatherService
      .getWeatherByGeoLocation(this.latitude, this.longitude)
      .subscribe({
        next: (data) => {
          this.weatherData = data;
          this.responseErr = null;
        },
        error: (error) => {
          this.responseErr = 'Fetching Data Failed';
        },
        complete: () => {
        }
      });
  }

  //get current geo-location forecast data
  getGeoLocationForecast() {

    this._forecast = this._weatherService
      .getForecastByGeoLocation(this.latitude, this.longitude)
      .subscribe({
        next: (data) => {
          this.forecastData = data;
          this.responseErr = null;
        },
        error: (error) => {
          this.responseErr = 'Fetching Data Failed';
        },
        complete: () => {
          this.loading = false;
        }
      });
  }

  //reditect to contact us page
  redirectToContactUs() {
    this._router.navigate(['/contact-us']);
  }

  //unsubscribe before destroying the component
  ngOnDestroy() {
    this._geoLocService.stopMonitoring();
    this._posSub?.unsubscribe();
    this._errSub?.unsubscribe();
    this._weather?.unsubscribe();
    this._forecast?.unsubscribe();
    this._errSub?.unsubscribe();
  }
}
