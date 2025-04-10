import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrl: './contact-us.component.scss',
    standalone: false
})
export class ContactUsComponent {

  
  //local variables declaration
  _contactForm!: FormGroup;
  _errorMessage: string = '';
  _loading: boolean =false;

    ngOnInit(): void{ 

   
      setTimeout(()=> {
        this._loading = true;
      }, 1500)
      
      this._loading = false;

       //Initialize the form
      this._contactForm = new FormGroup({
        fullName: new FormControl('', [Validators.required]),
        emailAddress: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required]),
      });
 
    }

    //getter for form-control[fullName]
    get fullName() {
      return this._contactForm.get('fullName');}
  
    //getter for form-control[emailAddress]
    get emailAddress() {
      return this._contactForm.get('emailAddress');}
    
    //getter for form-control [message]
    get message() {
      return this._contactForm.get('message');}

    sendMesssage(){

    }

}
