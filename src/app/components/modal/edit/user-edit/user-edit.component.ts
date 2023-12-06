import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/user/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserService],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {}

  ngOnInit() {
    const userId: any = this.route.snapshot.paramMap.get('id');
    this.userService.retrieveUserById(userId).subscribe(data => {
      this.user = data;
    });
  }

  saveUser() {
    this.userService.updateUser(this.user).subscribe(response => {
      alert('User updated successfully');
      console.log('User updated successfully', response);
      this.router.navigate(['user']);
    });
  }
}
