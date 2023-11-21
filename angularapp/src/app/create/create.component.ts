import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { IPlayer } from 'src/models/data/iPlayer';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  

  
  constructor(private service:PlayerService,private route:Router) { }

  isReady=false
  playerdata:IPlayer={
    id: 0, name: "", age: 0, teamId: 0, category: "", biddingPrice: 0,
    teams: ''
  }
  id:number

  editPlayer(p:IPlayer)
  {
    this.service.GetPlayerById(this.id).subscribe((data:IPlayer)=>{
      this.playerdata=data; 
      this.isReady= true;
      console.log(this.playerdata);
    })
  }

  editPlayerData(player:IPlayer)
  {
    this.playerdata=player
    this.service.EditPlayer(this.id,player).subscribe(()=>
    {
      alert('Record Edited')
      this.route.navigate(['/getplayers'])
  });
  }

  ngOnInit(): void {
  }


}
