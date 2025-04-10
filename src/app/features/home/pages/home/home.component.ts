import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent {
  constructor(private router: Router) {}

  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }
  
  redirectToOurServices() {
    this.router.navigate(['/our-services']);
  }


}
