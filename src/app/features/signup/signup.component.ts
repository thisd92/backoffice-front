import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  title = 'Sign Up';
  signupForm = this.formBuilder.group({
    username: '',
    password: '',
    confirmPassword: '',
  });

  submitForm() {
    console.log(this.signupForm.value);
    this.signupForm.patchValue({
      username: '',
      password: '',
      confirmPassword: '',
    });
  }

  constructor(private formBuilder: FormBuilder) {}
}
