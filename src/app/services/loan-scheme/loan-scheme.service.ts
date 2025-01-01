import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanSchemeService {

  constructor(private http:HttpClient) { }

  private addloanSchemeurl ="http://localhost:8080/loanapp/loanschemes";
  private loanSchemeByIdurl ="http://localhost:8080/loanapp/loanschemes";
  private getAllloanSchemesurl ="http://localhost:8080/loanapp/allloanschemes";
  private loanstatusurl = ' http://localhost:8080/loanapp/report';
  private apiUrl = 'http://localhost:8080/loanapp/loanschemes/search';
  addloanScheme(addloanScheme:any){
    return this.http.post(this.addloanSchemeurl, addloanScheme)
  }
 getLoanschemeById(id:string){
  return this.http.get(`${this.loanSchemeByIdurl}/${id}`)
 }

 updateLoanScheme(id:string, updateloanScheme:any){
  return this.http.put(`${this.loanSchemeByIdurl}/${id}`, updateloanScheme)
 }
 getAllloanSchemes(){
  return this.http.get(this.getAllloanSchemesurl);
 }

 getloanSchemeByName(schemeName: string, page: number, pageSize: number): Observable<any> {
  const params = new HttpParams()
    .set('schemeName', schemeName)
    .set('pageNumber', page.toString())
    .set('pageSize', pageSize.toString());
  
  return this.http.get<any>(`${this.apiUrl}`, { params });
}

 getLoanSchemes(page: number, pageSize: number): Observable<any> {
  const params = new HttpParams()
    .set('pageNumber', (page - 1).toString())  // Assuming API starts page count from 0
    .set('pageSize', pageSize.toString());

  return this.http.get<any>(this.getAllloanSchemesurl, { params });
}

 deleteLoanScheme(id:string){
  return this.http.delete(`${this.loanSchemeByIdurl}/${id}`)
 }


 getLoanStatusReport(page: number, size: number): Observable<any> {
  const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

  return this.http.get<any>(this.loanstatusurl, { params });  // We don't need to define models
}
}
