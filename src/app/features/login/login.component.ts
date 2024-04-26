import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  title = 'Sign In'
  loginForm = this.formBuilder.group({
    username: '',
    password: ''

  })

  submitForm() {
    console.log(this.loginForm.value)
    this.loginForm.patchValue({
      username: '',
      password: ''
    })
  }

  constructor(private formBuilder: FormBuilder) {}
}
