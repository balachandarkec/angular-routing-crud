import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url='http://localhost:3000/employees';

  constructor(private http:HttpClient) { }


  createEmployee(employee: Object): Observable<Object>{
    return this.http.post(`${this.url}`,employee);
  }
 
  getAllEmployees():Observable<any>{
    return this.http.get(`${this.url}`);
  }
 
  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }


  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }

}
