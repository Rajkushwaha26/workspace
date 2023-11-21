import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from '../models/data/iPlayer';

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
    return this.http.get<IPlayer[]>(`${this.url}/GetPlayer`)
  }
  player:IPlayer
//id
  GetPlayerById(id:number):Observable<IPlayer>
  {
    return this.http.get<IPlayer>(this.url+'/GetPlayer/'+id)
  }

  //create
  AddPlayer(playerdata:IPlayer):Observable<IPlayer>{
    return this.http.post<IPlayer>(this.url+'/PostPlayers',playerdata,this.httpOptions);
  }

  //editPlayer
  EditPlayer(playerdata:IPlayer):Observable<IPlayer>{
    return this.http.put<IPlayer>(this.url+'/PutPlayer'+playerdata.id,playerdata,this.httpOptions)
  }

  //deletePlayer
  DeletePlayer(id:number):Observable<IPlayer>{
    const url=`${this.url}/DeletePlayer/${id}`;
    return this.http.delete<IPlayer>(url);
  }



}
