import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayer } from '../models/data/iPlayer';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private url='https://8080-cfdbdbcbdfacbbecabcdadeafbbdcaeafe.premiumproject.examly.io/Admin';
  // httpClient: any;
  httpOptions:HttpHeaders;
  constructor(private http:HttpClient) { 

    this.httpOptions = new HttpHeaders({'Content-type':'application/json'})
  }
  

  //GetAllPlyers(Dispaly)
  GetAllPlayers():Observable<IPlayer[]>{
    return this.http.get<IPlayer[]>(this.url+'/GetPlayer')
  }
  
//id
  GetPlayerById(id:number):Observable<IPlayer>
  {
    return this.http.get<IPlayer>(this.url+'/GetPlayer/'+id)
  }

  //create
  AddPlayer(playerdata:IPlayer):Observable<IPlayer>{
    console.log(playerdata);
    return this.http.post<IPlayer>(this.url+'/PostPlayers',playerdata,{headers:this.httpOptions})
  }

  //editPlayer
  EditPlayer(id:number ,playerdata:IPlayer):Observable<IPlayer>{
    return this.http.put<IPlayer>(this.url+'/PutPlayer'+id,playerdata,{headers:this.httpOptions})
  }

  //deletePlayer
  DeletePlayer(id:number,playerdata:IPlayer):Observable<IPlayer>{
    return this.http.delete<IPlayer>(this.url+'/DeletePlayer/'+id)
  }



}
