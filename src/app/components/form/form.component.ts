import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { InfoFormComponent } from './form-component/info-form/info-form.component';
import { FormInform } from '../radio-btn';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    InfoFormComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @ViewChild('table') table!: ElementRef;
  public open: boolean = false;
  public formData: FormInform[] = [];
  public myForm!: FormGroup;
  constructor(private fb: FormBuilder, private rendere: Renderer2) {
    this.myForm = fb.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      gender: new FormControl('', Validators.required),
      message: new FormControl(''),
    });
  }
  submitForm() {
    this.formData.push(this.myForm.value);
    if (this.myForm) {
      this.myForm.reset();
    }
    console.log(this.formData);
  }
  closeTable(): void {
    this.open = false;
    this.rendere.removeClass(this.table.nativeElement, 'open__table');
  }
  lookInfo(): void {
    this.open = !this.open;
    if (this.open) {
      this.rendere.addClass(this.table.nativeElement, 'open__table');
    } else {
      this.rendere.removeClass(this.table.nativeElement, 'open__table');
    }
  }
}
