import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-our-services',
    templateUrl: './our-services.component.html',
    styleUrl: './our-services.component.scss',
    standalone: false
})
export class OurServicesComponent {

   constructor(private router: Router) {}

  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }

}
