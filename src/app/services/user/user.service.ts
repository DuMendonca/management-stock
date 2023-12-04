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
}
