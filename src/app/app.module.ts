import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, Title, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MasterPageComponent } from './layout/master-page/master-page.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SocialMediaButtonsComponent } from './components/social-media-buttons/social-media-buttons.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';


@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    SocialMediaButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,

    ShareButtonsModule.withConfig({
      debug: true,
    }),
    ShareIconsModule
  ],
  providers: [
    //Url requests - structure
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    Title,
    provideClientHydration(withEventReplay())
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { 
    //for Font-Awesome to be accessible globally
    constructor(library: FaIconLibrary) {
      library.addIconPacks(fas);
    }
}
