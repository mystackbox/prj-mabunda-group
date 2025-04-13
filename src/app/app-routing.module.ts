import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { NotFoundModule } from './features/not-found/not-found.module';
import { AboutUsModule } from './features/about-us/about-us.module';

import { GalleryModule } from './features/gallery/gallery.module';
import { OurServicesModule } from './features/our-services/our-services.module';
import { ContactUsModule } from './features/contact-us/contact-us.module';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    //redirect to the component module
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
        data: {
          title: 'Welcome',
          description: 'welcome to mabunda group, your ehs & engineering specialist'        
        },
      },

      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
        data: {
          title: 'Welcome',
          description: 'your ehs & engineering specialist' 
        },
      },

      {
        path: 'about-us',
        loadChildren: () =>
          import('./features/about-us/about-us.module').then(
            (m): typeof AboutUsModule => m.AboutUsModule
          ),
        data: {
          title: 'About Us',
          description: 'determined to serve our customers',
        },
      },

      {
        path: 'our-services',
        loadChildren: () =>
          import('./features/our-services/our-services.module').then(
            (m): typeof OurServicesModule => m.OurServicesModule
          ),
        data: {
          title: 'Our Services',
          description: 'Addressing our customers needs',
        },
      },

      {
        path: 'gallery',
        loadChildren: () =>
          import('./features/gallery/gallery.module').then(
            (m): typeof GalleryModule => m.GalleryModule
          ),
        data: {
          title: 'Gallery',
          description: 'some of our successful projects',
        },
      },

      {
        path: 'contact-us',
        loadChildren: () =>
          import('./features/contact-us/contact-us.module').then(
            (m): typeof ContactUsModule => m.ContactUsModule
          ),
        data: {
          title: 'Contact Us',
          description: 'get in touch with us today!',
        },
      },

      {
        path: 'page-not-found',
        loadChildren: () =>
          import('./features/not-found/not-found.module').then(
            (m): typeof NotFoundModule => m.NotFoundModule
          ),
        data: {
          title: 'Page not found',
          description: 'sorry, the page you are looking for was not found.'
        },
      },
      
      {
        path: '**',
        redirectTo: '/page-not-found',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
