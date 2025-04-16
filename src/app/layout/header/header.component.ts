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
  title: any;
  headerTitle: any;
  headerDescription: any;

  constructor(

    private titleService: Title,
    private metaTagService: MetaTagService,
    private _meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    
  ) {
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

      let seoData = data['seo'];
      
      this.metaTagService.updateTitle(seoData['title']);
      this.metaTagService.updateMetaTags(seoData['metaTags']);

      this.headerTitle = this._meta.getTag('name=title')?.content; //header title
      this.headerDescription = this._meta.getTag('name=short-desc')?.content; //header description
 
    });}

  ngOnInit(): void {
  }
}
