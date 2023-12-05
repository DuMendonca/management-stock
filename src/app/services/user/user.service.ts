import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "http://localhost:8082/user";

  constructor(private http: HttpClient) { }

  validateLogin(username: string, password:string): Observable<Boolean> {    
    return this.http.get<Boolean>(`${this.apiUrl}/${username}/${password}`);
  }

  retrieveUsers(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }

   //Find By Id
   retrieveUserById(userId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/${userId}`);
  }

  // Create a new User
  saveUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, user);
  }

  // Update a User
  updateUser(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${user.id}`, user);
  }

  //Delete a User
  deleteUserById(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${userId}`);
  }

  //Delete all Users
  deleteAllUsers(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`);
  }
}
