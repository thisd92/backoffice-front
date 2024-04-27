import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  standalone: true,
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
  imports: [ReactiveFormsModule],
})
export class UserLoginComponent {
  title = 'Sign In';
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  submitForm() {
    console.log(this.loginForm.value);
    this.loginForm.patchValue({
      username: '',
      password: '',
    });
  }

  constructor(private formBuilder: FormBuilder) {}
}
