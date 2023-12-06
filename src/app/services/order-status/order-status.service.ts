import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderStatusService {

  private apiUrl = 'http://localhost:8082/orderStatus';

  constructor(private http: HttpClient) { }

  //Find All
  retrieveAllOrderStatus(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }

  //Find By Id
  retrieveOrderStatusById(orderStatusId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/${orderStatusId}`);
  }

  // Create a new OrderStatus
  saveOrderStatus(orderStatus: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, orderStatus);
  }

  // Update a OrderStatus
  updateOrderStatus(orderStatus: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${orderStatus.orderStatusId}`, orderStatus);
  }

  //Delete a OrderStatus
  deleteOrderStatusById(orderStatusId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${orderStatusId}`);
  }

  //Delete all OrderStatus
  deleteAllOrderStatus(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`);
  }
}
