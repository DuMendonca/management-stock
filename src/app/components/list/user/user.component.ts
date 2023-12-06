import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NavigationComponent],
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
  
    editUser(userId: number) {
      this.router.navigate([`user/${userId}/edit`]);
    }
  
    removeAllUsers() {
      this.userService.deleteAllUsers().subscribe(() => {
        alert("All Users deleted successfullys!")
        this.softReload();
      });
    }

    removeUser(userId: number) {
      this.userService.deleteUserById(userId).subscribe(() => {
        alert("User deleted successfullys!")
        this.softReload();
      })
    }

    softReload() {
      const currentUrl = this.router.url;
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([currentUrl]);
      });
    }
  
    createNewUser(){
      this.router.navigate(['user/new']);
    }
}
