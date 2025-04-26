import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../../shared/services/weather/weather.service';
import { Router } from '@angular/router';

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

  constructor(private weatherService: WeatherService, private router: Router) {}

  //fetch weather data
  ngOnInit(): void {

    this.getGeoLocationWeather()
    this.getGeoLocationForecast();
    this.todayDate = new Date();

  }

  //get current geolocation weather
  getGeoLocationWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      this.weatherService
        .getWeatherByGeoLocation(latitude, longitude)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.weatherData = data;
          },
          error: (error) => {
            console.error('Error fetching weather:', error);
            throw new error();
          },
          complete: () => {
            // console.info('fetching data completed');
          },
        });
    });
  }

  //get current geolocation forecast
  getGeoLocationForecast() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      this.weatherService
        .getForecastByGeoLocation(latitude, longitude)
        .subscribe({
          next: (data) => {
            console.log(data);

            this.forecastData = data.list.slice(0,6);
          },
          error: (error) => {
            console.error('Error fetching weather:', error);
            throw new error();
          },
          complete: () => {
            // console.info('fetching data completed');
          },
        });
    });
  }

  //reditect to contact us page
  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }
}
