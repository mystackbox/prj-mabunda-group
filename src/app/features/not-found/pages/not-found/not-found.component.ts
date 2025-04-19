import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  standalone: false,
})
export class NotFoundComponent {
  //Injecting services
  constructor(private router: Router) {}

  //reditect to contact us page
  redirectToContactUs() {
    this.router.navigate(['/contact-us']);
  }
  
}
