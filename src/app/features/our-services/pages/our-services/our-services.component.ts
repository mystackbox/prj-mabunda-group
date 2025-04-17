import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss',
  standalone: false,
})
export class OurServicesComponent {
  //Injecting services
  constructor(private router: Router) {}

  //reditect to contact us page
  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }
}
