import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';
import { Observable, of } from 'rxjs';
import { ComponentCanDeactivate } from '../../../../shared/route-guards/canDeactivate/can-deactivate.guard';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
  standalone: false,
})
export class ContactUsComponent implements ComponentCanDeactivate {
  //local variables
  _contactForm!: FormGroup;
  _responseStatus: any = undefined;
  _formStatus: boolean = false;
  _loading: boolean = false;
  defaultMessageSubject: string = '';
  messageSubjects: any;
  _isSubmitted = false;

  ngOnInit(): void {
    this._loading = false;
    this.defaultMessageSubject = '* --- Subject ---';

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
    this._isSubmitted = true;
    if (this._contactForm.invalid) {
      this._formStatus = true;
      return;
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to submit the form.',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      confirmButtonColor: '#FF0000',
      cancelButtonText: 'No',
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

        Swal.fire('Successful!', 'Your form has been submitted.');
      }
    });
  }

  canDeactivateContact(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this._contactForm.dirty && this._isSubmitted == false) {
      return true;
    }

    return Swal.fire({
      title: 'Are you sure?',
      text: 'You want to discard the changes.',
      showCancelButton: true,
      confirmButtonColor: '#FF0000',
      cancelButtonColor: '#20B2AA',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => result.isConfirmed);
  }

  //clear or reset variables
  clear() {
    this._responseStatus = undefined;
    this.defaultMessageSubject = '* --- Subject ---';
    this._formStatus = false;
    this._contactForm.reset();
  }
}
