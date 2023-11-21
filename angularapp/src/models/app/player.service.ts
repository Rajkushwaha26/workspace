import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from '../data/iPlayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url='https://8080-cfdbdbcbdfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/api/Admin';
  httpClient: any;

  constructor(private http:HttpClient) { }
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}

  //GetAllPlyers(Dispaly)
  GetAllPlayers():Observable<IPlayer[]>{
    return this.httpClient.get<IPlayer[]>(`${this.url}/GetPlayers`)
  }


  // //Create(Dispaly)
  // AddPlayers(playerdata:IPlayer):Observable<IPlayer>{
  //   return this.http.post<IPlayer>(this.url+'/PostPalyers');
  // }

  GetPlayerById(id:number):Observable<IPlayer>
  {
    return this.httpClient.get<IPlayer>(this.url+'/ListMovies/'+id)
  }
}
