import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { MetaTagService } from '../../shared/services/mata-tags/meta-tags';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    standalone: false
})
export class HeaderComponent {

  //variables
  title: any;
  headerTitle: any;
  headerDescription: any;

  //Injecting services
  constructor(

    private titleService: Title,
    private metaTagService: MetaTagService,
    private _meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    
  ) {

    //detect routing requests changes or update
    this.router.events
    .pipe(
      filter((e) => e instanceof NavigationEnd),
      map((_e) => this.activatedRoute),
      map((route: any) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route: any) => route.outlet === 'primary'),
      mergeMap((route: any) => route.data)
    )
    .subscribe((data: any) => {

      //retrieve meta data for the activated url
      let seoData = data['seo'];
      
      //assign meta data for the activated url to page header meta tags
      this.metaTagService.updateTitle(seoData['title']);
      this.metaTagService.updateMetaTags(seoData['metaTags']);

      this.headerTitle = this._meta.getTag('name=title')?.content; //header title
      this.headerDescription = this._meta.getTag('name=short-desc')?.content; //header description
 
    });}
}
