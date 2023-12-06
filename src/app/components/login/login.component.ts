import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  mensagemLogin: string = "";
  isLoginValid: any;

  constructor(
    private router: Router, 
    private userService: UserService
  ) {}

  login(): void {    
    this.userService.validateLogin(this.username, this.password).subscribe(data => {
      console.log("Data" + data);
      this.isLoginValid = data

      if (this.isLoginValid) {
        alert('Login realizado com sucesso!');
        this.router.navigate(["order"]);
      } else {
        alert('Usuário ou senha inválidas!');
      }
      
      this.cleanAuth();
    })
  }
  
  cleanAuth(): void {
    this.username = "";
    this.password = "";
  }

}
