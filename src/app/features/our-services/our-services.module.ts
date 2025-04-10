import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    OurServicesComponent
  ],
  imports: [
    CommonModule,
    OurServicesRoutingModule,
    FontAwesomeModule
  ]
})
export class OurServicesModule { 
    //for Font-Awesome to be accessible globally
    constructor(library: FaIconLibrary) {
      library.addIconPacks(fas);
    }
}
