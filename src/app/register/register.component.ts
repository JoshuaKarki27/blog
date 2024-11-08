import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  imports: [CommonModule, MatButtonModule, FormsModule],
  standalone: true
})

export class RegisterComponent {
  @Output() showMainButtonsEvent = new EventEmitter<boolean>();
  
  constructor(private userService: UserService, private router: Router) {}

  dummyUser: User = {
    username: 'testUser',
    password: 'securePassword123',
    email: 'testuser@example.com',
  };

  newUser: User = {};

  username: string = "";
  password: string = "";
  email: string = ""
  confirmPassword: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/;

  showMainButtons() {
    this.router.navigate(['']); 
    this.showMainButtonsEvent.emit(true); 
  }

  // Check if the password meets requirements
  validatePassword() {
    if (!this.passwordPattern.test(this.password)) {
      this.passwordError = "Password must be at least 10 characters long, contain a capital letter, a number, and a special character.";
    } else {
      this.passwordError = "";
    }
  }

  validateConfirmPassword() {
    if (this.password !== this.confirmPassword) {
      this.confirmPasswordError = "Passwords do not match.";
    } else {
      this.confirmPasswordError = "";
    }
  }

  CheckRegistrationInfo() {
    this.validatePassword();
    this.validateConfirmPassword();

    if (!this.passwordError && !this.confirmPasswordError) {
      this.newUser.username = this.username;
      this.newUser.password = this.password;
      this.newUser.email = this.email;
      this.userService.addUser(this.newUser);
      this.showMainButtons();
    }
  }
}