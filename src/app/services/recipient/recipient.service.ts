import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipientService {

  private apiUrl = 'http://localhost:8082/recipient';
  
  constructor(private http: HttpClient) { }

  retrieveRecipients(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }
}
