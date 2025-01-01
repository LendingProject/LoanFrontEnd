import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/payment'; // Your API endpoint

  constructor(private http: HttpClient) {}

  makePayment(payment: any): Observable<any> {
    return this.http.post(this.apiUrl, payment);

  }
}
