import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url='https://8080-cfdbdbcbdfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/api/Admin';

  constructor(private http:HttpClient) { }
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  //GetAllPlyers(Dispaly)
  GetAllPlayers():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/GetPlayers');
  }

  // GetPlyersById(Dispaly)
  // GetPlyersById():Observable<any[]>{
  //   return this.http.get<any[]>(this.url+'/GetPlayers');
  // }

  //Create(Dispaly)
  AddPlayers():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/GetPlayers');
  }
}
