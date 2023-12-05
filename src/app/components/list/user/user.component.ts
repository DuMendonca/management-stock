import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    
    userList:any[] = [];
  
    constructor(private userService: UserService, private router:Router){}
  
    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers(){
      this.userService.retrieveUsers().subscribe(res => {
        console.log(res);
    
        this.userList = res;
      });
    }
  
    editUser(UserId: number) {
      console.log("editou");
    }
  
    removeUser(UserId: number) {
      console.log("removeu");
    }
  
    createNewUser(){
      this.router.navigate(['user/new']);
    }
}
