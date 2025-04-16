import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { MetaTagService } from './shared/services/mata-tags/meta-tags';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'prj-mabunda-group';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private metaTagService: MetaTagService
  ) {}
}
