import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './pages/weather/weather.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDay, faCalendarDays, faClock, faCloud, faCloudSun, faLocationDot, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherRoutingModule, FontAwesomeModule],
})
export class WeatherModule {
    //for Font-Awesome to be accessible globally
      constructor(library: FaIconLibrary) {
         library.addIcons(
          faLocationDot,
          faTemperatureHigh,
          faCloud,
          faCalendarDays,
          faClock

            );
      }
}
