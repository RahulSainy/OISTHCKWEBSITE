import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Handle form submission logic here
      console.log('Form submitted successfully.');
    } else {
      // Mark form fields as touched to show validation errors
      this.form.markAllAsTouched();
    }
  }
}
