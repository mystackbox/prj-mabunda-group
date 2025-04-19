import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faChalkboardUser,
  faChevronRight,
  faHand,
  faHandHoldingDroplet,
  faHelmetSafety,
  faPhone,
  fas,
  faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, FontAwesomeModule],
})
export class HomeModule {
  //for Font-Awesome to be accessible globally
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faHandHoldingDroplet,
      faHelmetSafety,
      faScrewdriverWrench,
      faChalkboardUser,
      faChevronRight
    );
  }
}
