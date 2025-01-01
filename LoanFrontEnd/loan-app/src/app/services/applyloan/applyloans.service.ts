import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplyloansService {
  private apiUrl = 'http://localhost:8080/loanapp/addloan'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  // Submit loan application using HTTP POST
  submitLoanApplication(application: { 
    user_id: number; 
    loanamount: number; 
    time: number; 
    loanscheme: { id: number; schemeName: string; }; 
  }): Observable<any> {
    return this.http.post(this.apiUrl, application);
  }
}
