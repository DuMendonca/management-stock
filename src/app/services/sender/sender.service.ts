import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  private apiUrl = "http://localhost:8082/sender";

  constructor(private http: HttpClient) { }

  retrieveSenders(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }
}
