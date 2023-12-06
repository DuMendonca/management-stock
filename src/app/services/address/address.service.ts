import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiUrl = 'http://localhost:8082/address';

  constructor(private http: HttpClient) { }

  //Find All
  retrieveAddresss(): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/`);
  }

  //Find By Id
  retrieveAddressById(addressId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/${addressId}`);
  }

  // Create a new Address
  saveAddress(address: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, address);
  }

  // Update a Address
  updateAddress(address: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${address.addressId}`, address);
  }

  //Delete a Address
  deleteAddressById(addressId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${addressId}`);
  }

  //Delete all Addresss
  deleteAllAddresss(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`);
  }
}
