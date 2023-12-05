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

   //Find By Id
   retrieveRecipientById(recipientId: number): Observable<any> {    
    return this.http.get<any>(`${this.apiUrl}/${recipientId}`);
  }

  // Create a new Recipient
  saveRecipient(recipient: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/`, recipient);
  }

  // Update a Recipient
  updateRecipient(recipient: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${recipient.id}`, recipient);
  }

  //Delete a Recipient
  deleteRecipientById(recipientId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${recipientId}`);
  }

  //Delete all Recipients
  deleteAllRecipients(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/`);
  }
}
