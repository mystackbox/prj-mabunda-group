import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  standalone: false,
})
export class ContactUsComponent {
  //local variables
  _contactForm!: FormGroup;
  _responseStatus: any = undefined;
  _formStatus: boolean = false;
  _loading: boolean = false;
  defaultMessageSubject: string = '';
  messageSubjects: any;

  constructor() {}

  ngOnInit(): void {
    this._loading = false;
    this.defaultMessageSubject = '--- select message subject ---';

    this.messageSubjects = [
      { id: 1, name: 'EHS services related query' },
      { id: 2, name: 'Engineering services related query' },
      { id: 3, name: 'Fire services related query' },
      { id: 4, name: 'Traning services related query' },
    ];

    //Initialize form
    this._contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(this.defaultMessageSubject, [
        Validators.required,
      ]),
      message: new FormControl('', [Validators.required]),
    });
  }

  //getter for form-control[fullName]
  get name() {
    return this._contactForm?.get('name');
  }

  //getter for form-control[emailAddress]
  get email() {
    return this._contactForm?.get('email');
  }

  //getter for form-control[subject]
  get subject() {
    return this._contactForm.get('subject');
  }

  //getter for form-control [message]
  get message() {
    return this._contactForm?.get('message');
  }

  //send form data to mailjs service
  sendMesssage() {
    if (this._contactForm.invalid) {
      this._formStatus = true;
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to submit the form?',
      icon: 'warning',
      iconColor: 'red',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      confirmButtonColor: 'red',
      cancelButtonText: 'Cancel',
      cancelButtonColor: '#20B2AA',
    }).then(async (result) => {

      if (result.isConfirmed) {
        
        const form = this._contactForm.value;
        this._loading = true;

        await emailjs
          .send(
            'service_2pklnjh',
            'template_dq5ahwp',
            form,
            'Pe8KJ-tOAeAn4A5Fd'
          )
          .then(
            (result: EmailJSResponseStatus) => {
              this._responseStatus = true;
              this._contactForm.reset();
            },
            (error) => {
              if (error) this._responseStatus = false;
            }
          );
        this._loading = false;

        Swal.fire('Successful!', 'Your form has been submitted.', 'success');
      }
    });
  }

  //clear or reset variables
  clear() {
    this._responseStatus = undefined;
    this.defaultMessageSubject = '--- select message subject ---';
    this._formStatus = false;
  }
}
