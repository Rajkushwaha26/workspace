import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private url = '';
  constructor(private http:HttpClient) { }

  register(user):Observable<any>{
    return this.http.post(`${this.url}/register`,user);
  }

  login(credentials):Observable<any>{
    return this.http.post(`${this.url}/login`,credentials);
  }
}
