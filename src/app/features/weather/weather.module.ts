import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './pages/weather/weather.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendarDays, faClock, faCloud, faDroplet, faGauge, faLocationDot, faTemperatureHigh } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../shared/modules/shared.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [SharedModule, CommonModule, WeatherRoutingModule, FontAwesomeModule, SharedModule],
})
export class WeatherModule {
    //for Font-Awesome to be accessible globally
      constructor(library: FaIconLibrary) {
         library.addIcons(
          faLocationDot,
          faTemperatureHigh,
          faCloud,
          faCalendarDays,
          faClock,
          faDroplet,
          faGauge
            );
      }
}
