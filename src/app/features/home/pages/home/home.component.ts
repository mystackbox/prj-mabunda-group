import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  //Injecting services
  constructor(private router: Router) {}

  //reditect to contact us page
  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }

  //reditect to our services page
  redirectToOurServices() {
    this.router.navigate(['/our-services']);
  }
}
