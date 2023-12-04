import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8082/product';

  constructor(private http: HttpClient) { }

  retrieveProducts(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }
}
