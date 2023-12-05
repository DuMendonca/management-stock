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

   //Find By Id
   retrieveSenderById(senderId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/${senderId}`);
  }

  // Create a new Sender
  saveSender(sender: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, sender);
  }

  // Update a Sender
  updateSender(sender: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${sender.id}`, sender);
  }

  //Delete a Sender
  deleteSenderById(senderId: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${senderId}`);
  }

  //Delete all Senders
  deleteAllSenders(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`);
  }
}
