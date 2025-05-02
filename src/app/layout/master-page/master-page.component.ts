import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-master-page',
    templateUrl: './master-page.component.html',
    styleUrl: './master-page.component.scss',
    providers: [],
    standalone: false
})
export class MasterPageComponent {

  constructor(){}
  
  ngOnIninti(): void{
    console.log('Launched - MasterPage');
  }

}
