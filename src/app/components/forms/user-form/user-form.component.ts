import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {
  user: any = {};

  constructor(private userService: UserService){}

  saveUser() {
    this.userService.saveUser(this.user).subscribe(
      () => {
        alert('User created successfully');
        this.resetForm();
      }, error => {
        console.log('Erro creating a user', error);
      }
    );
  }

  resetForm() {
    this.user = {};
  }
}
