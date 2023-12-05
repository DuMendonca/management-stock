import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8082/product';

  constructor(private http: HttpClient) { }

  //Find All
  retrieveProducts(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }

  //Find By Id
  retrieveProductById(productId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/${productId}`);
  }

  // Create a new product
  saveProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, product);
  }

  // Update a product
  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${product.id}`, product);
  }

  //Delete a product
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${productId}`);
  }

  //Delete all products
  deleteAllProducts(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`);
  }
}
