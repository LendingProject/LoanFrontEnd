import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {
  private apiUrl =  'http://localhost:8080/loanapp/submitquery';

  constructor(private http: HttpClient) {}

  submitQuery(query: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/submit`, query);
  }

  getQueries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }
}
