import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss',
    standalone: false
})
export class AboutUsComponent {
  constructor(private router: Router) {}

  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }
}
