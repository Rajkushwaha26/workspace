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
  constructor(private playerservice:PlayerService,private ar:ActivatedRoute){}

  ngOnInit() 
  {
    const tid=this.ar.snapshot.paramMap.get('id')
    this.id=Number(tid)
    this.playerservice.GetPlayerById(this.id).subscribe((data:IPlayer)=>
    {
   this.playerdata=data
    })
  }

}
