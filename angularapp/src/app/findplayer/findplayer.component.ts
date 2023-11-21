import { Component, OnInit } from '@angular/core';
import { IPlayer } from 'src/models/data/iPlayer';
import { PlayerService } from '../player.service'; 
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-findplayer',
  templateUrl: './findplayer.component.html',
  styleUrls: ['./findplayer.component.css']
})
export class FindplayerComponent implements OnInit {

  playerdata:IPlayer
  id:number
  isReady = false;
 
  constructor(private service:PlayerService, private ar:ActivatedRoute) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getPlayerDetails(p:IPlayer){
    this.service.GetPlayerById(this.id).subscribe((data:IPlayer)=>{
      this.playerdata=data; 
      this.isReady= true;
      console.log(this.playerdata);
    })
  }
}
