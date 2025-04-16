import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, Title, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//scafolded components
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SocialMediaButtonsComponent } from './components/social-media-buttons/social-media-buttons.component';
import { ShareButtonsComponent } from './components/share-buttons/share-buttons.component';

//font-awesome
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

//socia media share buttons package - [ sharethis-angular ]
import { SharethisAngularModule } from 'sharethis-angular';

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
    SocialMediaButtonsComponent,
    ShareButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareButtons,
    CommonModule,
    FontAwesomeModule,
    SharethisAngularModule,
  ],
  providers: [
    //Url requests - structure
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    Title,
    provideClientHydration(withEventReplay()),

    provideShareButtonsOptions(
      shareIcons()
    )
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { 
    //for Font-Awesome to be accessible globally
    constructor(library: FaIconLibrary) {
      library.addIconPacks(fas);
    }
}
