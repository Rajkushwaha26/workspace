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
    id: 0, name: "", age: 0, teamId: 3, category: "", biddingPrice: 0,
    teams: null
  }
  saveData(playerdata:IPlayer):void{
    console.log(playerdata);
    this.U.AddPlayer(playerdata).subscribe(()=>{
    alert('record save')})
  }

  ngOnInit(): void {
  }

}

