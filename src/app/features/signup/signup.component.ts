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
    confirmPassword: '',
  });

  async submitForm() {
    const user = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      username: this.signupForm.value.username,
      password: this.signupForm.value.password,
      role: 'USER',
    };
    try {
      const response = await fetch('http://localhost:8090/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      this.signupForm.patchValue({
        name: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  constructor(private formBuilder: FormBuilder) {}
}
