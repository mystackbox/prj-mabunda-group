import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    FontAwesomeModule,
    NgxGalleryModule,
  ],
  providers: [provideHttpClient()] 
})
export class GalleryModule { 

}
