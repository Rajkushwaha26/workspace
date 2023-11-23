import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { IPlayer } from 'src/models/data/iPlayer';


@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.css']
})
export class AddInfoComponent implements OnInit {

  constructor(private U: PlayerService) { }
  playerdata:IPlayer={
    id: 0, name: "", age: 0, teamId: 0, category: "", biddingPrice: 0,
    teams: ''
  }
  saveData(playerdata:IPlayer):void{
    this.U.AddPlayer(playerdata).subscribe(()=>{
    alert('record save')})
  }

  ngOnInit(): void {
  }

}

