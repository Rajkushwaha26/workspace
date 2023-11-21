import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url='https://8080-cfdbdbcbdfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/api/Admin';

  constructor(private http:HttpClient) { }

  //GetAllPlyers(Dispaly)
  GetAllPlayers():Observable<any[]>{
    return this.http.get<any[]>(this.url+'/GetPlayers');
  }
}
