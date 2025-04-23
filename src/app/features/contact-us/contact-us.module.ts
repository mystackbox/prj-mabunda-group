import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faEnvelope, faLocationDot, faMapLocationDot, faPhone, fas, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { MapComponent } from '../../components/google-map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LoadingSpinnerComponent } from '../../components/loading-spinner/loading-spinner.component';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactUsComponent, MapComponent, LoadingSpinnerComponent],
  imports: [CommonModule, ContactUsRoutingModule, FontAwesomeModule, GoogleMapsModule, ReactiveFormsModule]
})
export class ContactUsModule {
  //for Font-Awesome to be accessible globally
  constructor(library: FaIconLibrary) {
      library.addIcons(
        faPhone,
        faEnvelope,
        faLocationDot,
        faCircleCheck,
        faTriangleExclamation
      );
  }
}
