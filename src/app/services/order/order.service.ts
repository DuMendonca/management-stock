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

   //Find By Id
   retrieveOrderById(orderId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/${orderId}`);
  }

  // Create a new order
  saveOrder(order: any): Observable<any> {
    console.log(order);
    return this.http.post<any>(`${this.apiUrl}/`, order);
  }

  // Update a order
  updateOrder(order: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${order.orderId}`, order);
  }

  //Delete a order
  deleteOrderById(orderId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${orderId}`);
  }

  //Delete all orders
  deleteAllOrders(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`);
  }
}
