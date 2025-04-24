import { Component } from '@angular/core';
import { WeatherService } from '../../shared/services/weather/weather.service';

@Component({
  selector: 'app-geo-loc-weather',
  standalone: false,
  templateUrl: './geo-loc-weather.component.html',
  styleUrl: './geo-loc-weather.component.scss',
})
export class GeoLocWeatherComponent {
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  //fetch weather data
  ngOnInit(): void {
    this.getLocationWeather();
  }

  //get current geolocation weather forecast
  getLocationWeather() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      this.weatherService.getWeatherByCoordinates(latitude, longitude).subscribe({
          next: (data) => {
            this.weatherData = data;
          },
          error: (error) => {
            console.error('Error fetching weather:', error);
            throw new error;
          },
          complete: () => {
            console.info('fetching data completed')
          }
        }
      );
    });
  }
}
