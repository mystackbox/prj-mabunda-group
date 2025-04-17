import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { MasterPageComponent } from './layout/master-page/master-page.component';
import { NotFoundModule } from './features/not-found/not-found.module';
import { AboutUsModule } from './features/about-us/about-us.module';
import { GalleryModule } from './features/gallery/gallery.module';
import { OurServicesModule } from './features/our-services/our-services.module';
import { ContactUsModule } from './features/contact-us/contact-us.module';
import { environment } from './shared/environment/enviro-prod';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
        data: {
          seo: {
            title: 'Welcome',
            metaTags: [
              { name: 'short-desc', content: 'Your EHS and Engineering Specialists' },
              { name: 'image', content: environment.appUrl + '/seo-img/share-img.png'  },
              { name: 'robots', content: 'index, follow'},
              { property: 'article:author', content: 'Yingisani'},

              { property: 'og:site_name', content: 'Mabunda Group' },
              { property: 'og:title', content: 'Your EHS & Engineering Specialists' },
              { name: 'description', proprety: 'og:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS, Environmental, Food Safety and other applicable legislation and to empower all interested and affected stakeholders.' },
              { property: 'og:type', content: 'Website' },

              { property: 'og:image', content: environment.appUrl + '/seo-img/share-img.png' },
              { property: 'og:image:secure_url', content: environment.appUrl + '/seo-img/share-img.png' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '627' },
              { property: 'og:image:alt', content: 'Your EHS & Engineering Specialists' },
              { property: 'og:url', content: environment.appUrl},

              { name: 'twitter:card', content: 'Summary'},
              { name: 'twitter:title', content: 'Your EHS & Engineering Specialists'},
              { name: 'twitter:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS.' },
              { name: 'twitter:url', content: environment.appUrl},
              { name: 'twitter:site', content: '@mabundagroup'},
              { name: 'twitter:creator', content: '@mabundagroup'},
              { name: 'twitter:image', content: environment.appUrl + '/seo-img/share-img.png' },
              { name: 'twitter:image:src', content: environment.appUrl + '/seo-img/share-img.png' },
              { name: 'twitter:image:alt', content: 'Your EHS & Engineering Specialists' }
            ]
          }
        }
      },

      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then(
            (m): typeof HomeModule => m.HomeModule
          ),
          data: {
            seo: {
              title: 'Welcome',
              metaTags: [
                { name: 'short-desc', content: 'Your EHS and Engineering Specialists' },
                { name: 'image', content: environment.appUrl + '/seo-img/share-img.png'  },
                { name: 'robots', content: 'index, follow'},
                { property: 'article:author', content: 'Yingisani'},
  
                { property: 'og:site_name', content: 'Mabunda Group' },
                { property: 'og:title', content: 'Your EHS & Engineering Specialists' },
                { name: 'description', proprety: 'og:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS, Environmental, Food Safety and other applicable legislation and to empower all interested and affected stakeholders.' },
                { property: 'og:type', content: 'Website' },
  
                { property: 'og:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:secure_url', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:tyep', content: 'image/png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '627' },
                { property: 'og:image:alt', content: 'Your EHS & Engineering Specialists' },
                { property: 'og:url', content: environment.appUrl + '/home'},
  
                { name: 'twitter:card', content: 'Summary'},
                { name: 'twitter:title', content: 'Your EHS & Engineering Specialists'},
                { name: 'twitter:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS.' },
                { name: 'twitter:url', content: environment.appUrl + '/home'},
                { name: 'twitter:site', content: '@mabundagroup'},
                { name: 'twitter:creator', content: '@mabundagroup'},
                { name: 'twitter:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:src', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:alt', content: 'Your EHS & Engineering Specialists' },
              ]
            }
          }
      },

      {
        path: 'about-us',
        loadChildren: () =>
          import('./features/about-us/about-us.module').then(
            (m): typeof AboutUsModule => m.AboutUsModule
          ),
          data: {
            seo: {
              title: 'About Us',
              metaTags: [
              { name: 'short-desc', content: 'We are committed to serve' },
              { name: 'image', content: environment.appUrl + '/seo-img/share-img.png'  },
              { name: 'robots', content: 'index, follow'},
              { property: 'article:author', content: 'Yingisani'},

              { property: 'og:site_name', content: 'Mabunda Group' },
              { property: 'og:title', content: 'Your EHS & Engineering Specialists' },
              { name: 'description', proprety: 'og:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS, Environmental, Food Safety and other applicable legislation and to empower all interested and affected stakeholders.' },
              { property: 'og:type', content: 'Website' },
              { property: 'og:image', content: environment.appUrl + '/seo-img/share-img.png' },
              { property: 'og:image:secure_url', content: environment.appUrl + '/seo-img/share-img.png' },
              { property: 'og:image:tyep', content: 'image/png' },
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '627' },
              { property: 'og:image:alt', content: 'Your EHS & Engineering Specialists' },
              { property: 'og:url', content: environment.appUrl + '/about-us'},

              { name: 'twitter:card', content: 'Summary'},
              { name: 'twitter:title', content: 'Your EHS & Engineering Specialists'},
              { name: 'twitter:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS.' },
              { name: 'twitter:url', content: environment.appUrl + '/about-us'},
              { name: 'twitter:site', content: '@mabundagroup'},
              { name: 'twitter:creator', content: '@mabundagroup'},
              { name: 'twitter:image', content: environment.appUrl + '/seo-img/share-img.png' },
              { name: 'twitter:image:src', content: environment.appUrl + '/seo-img/share-img.png' },
              { name: 'twitter:image:alt', content: 'Your EHS & Engineering Specialists' }

            ]
            }
          }
      },

      {
        path: 'our-services',
        loadChildren: () =>
          import('./features/our-services/our-services.module').then(
            (m): typeof OurServicesModule => m.OurServicesModule
          ),
          data: {
            seo: {
              title: 'Our Services',
              metaTags: [
                { name: 'short-desc', content: 'Addressing our clients needs' },
                { name: 'image', content: environment.appUrl + '/seo-img/share-img.png'  },
                { name: 'robots', content: 'index, follow'},
                { property: 'article:author', content: 'Yingisani'},
  
                { property: 'og:site_name', content: 'Mabunda Group' },
                { property: 'og:title', content: 'Your EHS & Engineering Specialists' },
                { name: 'description', proprety: 'og:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS, Environmental, Food Safety and other applicable legislation and to empower all interested and affected stakeholders.' },
                { property: 'og:type', content: 'Website' },
  
                { property: 'og:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:secure_url', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:tyep', content: 'image/png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '627' },
                { property: 'og:image:alt', content: 'Your EHS & Engineering Specialists' },
                { property: 'og:url', content: environment.appUrl + '/our-services'},
  
                { name: 'twitter:card', content: 'Summary'},
                { name: 'twitter:title', content: 'Your EHS & Engineering Specialists'},
                { name: 'twitter:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS.' },
                { name: 'twitter:url', content: environment.appUrl + '/our-services'},
                { name: 'twitter:site', content: '@mabundagroup'},
                { name: 'twitter:creator', content: '@mabundagroup'},
                { name: 'twitter:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:src', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:alt', content: 'Your EHS & Engineering Specialists' },
              ]
            }
          }
      },

      {
        path: 'gallery',
        loadChildren: () =>
          import('./features/gallery/gallery.module').then(
            (m): typeof GalleryModule => m.GalleryModule
          ),
          data: {
            seo: {
              title: 'Gallery',
              metaTags: [
                { name: 'short-desc', content: 'Our successful projects' },
                { name: 'image', content: environment.appUrl + '/seo-img/share-img.png'  },
                { name: 'robots', content: 'index, follow'},
                { property: 'article:author', content: 'Yingisani'},
  
                { property: 'og:site_name', content: 'Mabunda Group' },
                { property: 'og:title', content: 'Your EHS & Engineering Specialists' },
                { name: 'description', proprety: 'og:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS, Environmental, Food Safety and other applicable legislation and to empower all interested and affected stakeholders.' },
                { property: 'og:type', content: 'Website' },
  
                { property: 'og:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:secure_url', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:tyep', content: 'image/png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '627' },
                { property: 'og:image:alt', content: 'Your EHS & Engineering Specialists' },
                { property: 'og:url', content: environment.appUrl + '/gallery'},
  
                { name: 'twitter:card', content: 'Summary'},
                { name: 'twitter:title', content: 'Your EHS & Engineering Specialists'},
                { name: 'twitter:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS.' },
                { name: 'twitter:url', content: environment.appUrl + + '/gallery'},
                { name: 'twitter:site', content: '@mabundagroup'},
                { name: 'twitter:creator', content: '@mabundagroup'},
                { name: 'twitter:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:src', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:alt', content: 'Your EHS & Engineering Specialists' },
              ]
            }
          }
      },

      {
        path: 'contact-us',
        loadChildren: () =>
          import('./features/contact-us/contact-us.module').then(
            (m): typeof ContactUsModule => m.ContactUsModule
          ),
          data: {
            seo: {
              title: 'Contact Us',
              metaTags: [
                { name: 'short-desc', content: 'Get in tour with us today!' },
                { name: 'image', content: environment.appUrl + '/seo-img/share-img.png'  },
                { name: 'robots', content: 'index, follow'},
                { property: 'article:author', content: 'Yingisani'},
  
                { property: 'og:site_name', content: 'Mabunda Group' },
                { property: 'og:title', content: 'Your EHS & Engineering Specialists' },
                { name: 'description', proprety: 'og:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS, Environmental, Food Safety and other applicable legislation and to empower all interested and affected stakeholders.' },
                { property: 'og:type', content: 'Website' },
                { property: 'og:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:secure_url', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:tyep', content: 'image/png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '627' },
                { property: 'og:image:alt', content: 'Your EHS & Engineering Specialists' },
                { property: 'og:url', content: environment.appUrl + '/contact-us'},
  
                { name: 'twitter:card', content: 'Summary'},
                { name: 'twitter:title', content: 'Your EHS & Engineering Specialists'},
                { name: 'twitter:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS.' },
                { name: 'twitter:url', content: environment.appUrl + '/contact-us'},
                { name: 'twitter:site', content: '@mabundagroup'},
                { name: 'twitter:creator', content: '@mabundagroup'},
                { name: 'twitter:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:src', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:alt', content: 'Your EHS & Engineering Specialists' },
              ]
            }
          }
      },

      {
        path: 'page-not-found',
        loadChildren: () =>
          import('./features/not-found/not-found.module').then(
            (m): typeof NotFoundModule => m.NotFoundModule
          ),
          data: {
            seo: {
              title: 'Page Not Found',
              metaTags: [
                { name: 'short-desc', content: 'Oops! Resource not found' },
                { name: 'image', content: environment.appUrl + '/seo-img/share-img.png'  },
                { name: 'robots', content: 'index, follow'},
                { property: 'article:author', content: 'Yingisani'},
  
                { property: 'og:site_name', content: 'Mabunda Group' },
                { property: 'og:title', content: 'Your EHS & Engineering Specialists' },
                { name: 'description', proprety: 'og:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS, Environmental, Food Safety and other applicable legislation and to empower all interested and affected stakeholders.' },
                { property: 'og:type', content: 'Website' },
                { property: 'og:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:secure_url', content: environment.appUrl + '/seo-img/share-img.png' },
                { property: 'og:image:tyep', content: 'image/png' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '627' },
                { property: 'og:image:alt', content: 'Your EHS & Engineering Specialists' },
                { property: 'og:url', content: environment.appUrl + '/page-not-found'},
  
                { name: 'twitter:card', content: 'Summary'},
                { name: 'twitter:title', content: 'Your EHS & Engineering Specialists'},
                { name: 'twitter:description', content: 'EHS and Engineering consulting company, geared to assist the clients to comply with OHS.' },
                { name: 'twitter:url', content: environment.appUrl + '/page-not-found'},
                { name: 'twitter:site', content: '@mabundagroup'},
                { name: 'twitter:creator', content: '@mabundagroup'},
                { name: 'twitter:image', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:src', content: environment.appUrl + '/seo-img/share-img.png' },
                { name: 'twitter:image:alt', content: 'Your EHS & Engineering Specialists' },
              ]
            }
          }
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
