import { Component } from '@angular/core';
import { SignupComponent } from '../../features/signup/signup.component';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [SignupComponent],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss',
})
export class UserRegisterComponent {}
