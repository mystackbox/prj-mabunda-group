import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgxGalleryAnimation,
  NgxGalleryImageSize,
  NgxGalleryOptions,
} from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
})
export class GalleryComponent {
  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  //Injecting services
  constructor(private router: Router) {}

  ngOnInit(): void {
    //load ngx-gallery based on this configurations
    this.galleryOptions = [
      {
        image: false,
        thumbnailsRemainingCount: true,
        thumbnailsColumns: 3,
        thumbnailsRows: 2,
        height: '310px',
        width: '90%',
        imageSwipe: true,
        thumbnailsSwipe: true,
      },
      {
        breakpoint: 480,
        height: '180px',
        width: '100%',
      },
      {
        breakpoint: 690,
        height: '240px',
        width: '100%',
      },
      {
        breakpoint: 786,
        height: '240px',
        width: '100%',
      },
    ];

    this.galleryImages = [
      {
        small: 'gallery-img/3.jpeg',
        medium: 'gallery-img/3.jpeg',
        big: 'gallery-img/3.jpeg',
      },
      {
        small: 'gallery-img/1.jpeg',
        medium: 'gallery-img/1.jpeg',
        big: 'gallery-img/1.jpeg',
      },
      {
        small: 'gallery-img/5.jpeg',
        medium: 'gallery-img/5.jpeg',
        big: 'gallery-img/5.jpeg',
      },
      {
        small: 'gallery-img/2.jpeg',
        medium: 'gallery-img/2.jpeg',
        big: 'gallery-img/2.jpeg',
      },

      {
        small: 'gallery-img/4.jpeg',
        medium: 'gallery-img/4.jpeg',
        big: 'gallery-img/4.jpeg',
      },

      {
        small: 'gallery-img/6.jpeg',
        medium: 'gallery-img/6.jpeg',
        big: 'gallery-img/6.jpeg',
      },
      {
        small: 'gallery-img/7.jpeg',
        medium: 'gallery-img/7.jpeg',
        big: 'gallery-img/7.jpeg',
      },
      {
        small: 'gallery-img/8.jpeg',
        medium: 'gallery-img/8.jpeg',
        big: 'gallery-img/8.jpeg',
      },
      {
        small: 'gallery-img/9.jpeg',
        medium: 'gallery-img/9.jpeg',
        big: 'gallery-img/9.jpeg',
      },
      {
        small: 'gallery-img/10.jpeg',
        medium: 'gallery-img/10.jpeg',
        big: 'gallery-img/10.jpeg',
      },
      {
        small: 'gallery-img/11.jpeg',
        medium: 'gallery-img/11.jpeg',
        big: 'gallery-img/11.jpeg',
      },
      {
        small: 'gallery-img/12.jpeg',
        medium: 'gallery-img/12.jpeg',
        big: 'gallery-img/12.jpeg',
      },
      {
        small: 'gallery-img/13.jpeg',
        medium: 'gallery-img/13.jpeg',
        big: 'gallery-img/13.jpeg',
      },
      {
        small: 'gallery-img/14.jpeg',
        medium: 'gallery-img/14.jpeg',
        big: 'gallery-img/14.jpeg',
      },
    ];
  }

  //reditect to contact us page
  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }
}
