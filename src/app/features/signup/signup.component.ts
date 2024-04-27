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
    name: '',
    email: '',
    username: '',
    password: '',
    userRole: 'user',
  });

  async submitForm() {
    await fetch('http://localhost:8090/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.signupForm.value),
    });
    this.signupForm.patchValue({
      name: '',
      email: '',
      username: '',
      password: '',
      userRole: 'user'
    });
  }

  constructor(private formBuilder: FormBuilder) {}
}
