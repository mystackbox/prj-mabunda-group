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
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/modules/shared.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [ContactUsComponent, MapComponent],
  imports: [SharedModule, CommonModule, ContactUsRoutingModule, FontAwesomeModule, GoogleMapsModule, ReactiveFormsModule, SweetAlert2Module]
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
