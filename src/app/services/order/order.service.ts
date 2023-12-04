import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = "http://localhost:8082/order";


  constructor(private http: HttpClient) { }

  retrieveOrders(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }
}
