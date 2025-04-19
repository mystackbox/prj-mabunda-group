import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  Title,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//scafolded components
import { MasterPageComponent } from './layout/master-page/master-page.component';
import {
  CommonModule,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

//share buttons
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';

//font-awesome
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

//socia media share buttons package - [ ngx-sharebuttons]
import { ShareButtons } from 'ngx-sharebuttons/buttons';
import { provideShareButtonsOptions } from 'ngx-sharebuttons';
import { shareIcons } from 'ngx-sharebuttons/icons';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ShareButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtons,
    CommonModule,
    FontAwesomeModule,
  ],
  providers: [
    //Url requests - structure
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    Title,
    provideClientHydration(withEventReplay()),

    provideShareButtonsOptions(shareIcons()),
  ],

  bootstrap: [AppComponent],
})
export class AppModule {
  //for Font-Awesome to be accessible globally
  constructor(library: FaIconLibrary) {
    library.addIcons(faPhone);
  }
}
