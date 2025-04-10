import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, FontAwesomeModule],
})
export class AboutUsModule {
  //for Font-Awesome to be accessible globally
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
