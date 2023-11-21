import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { IPlayer } from 'src/models/data/iPlayer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  
  constructor(private service:PlayerService,private route:Router) { }

  playerdata:IPlayer={
    id: 0, name: '', age: 0, teamId: 0, category: '', biddingPrice: 0,
    teams: ''
  }
  isReady=false;
  id:number;

  deletePlayer(p:IPlayer)
  {
    this.service.GetPlayerById(this.id).subscribe((data:IPlayer)=>{this.playerdata=data});
    this.isReady=true;
  }

  deletePlayerData(player:IPlayer)
  {
    this.service.DeletePlayer(this.id,player).subscribe(()=>{
      alert("Record deleted")
      this.route.navigate(['/getplayers'])
    })
  }

  ngOnInit(): void {
  }

}
