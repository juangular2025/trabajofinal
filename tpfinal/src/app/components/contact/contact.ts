import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contactForm: FormGroup = new FormGroup({});

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitContactForm() {
    let control = this.contactForm.controls;
    console.log(`Nombre: ${control['nombre'].value} - Correo: ${control['email'].value} `);
  }
}
