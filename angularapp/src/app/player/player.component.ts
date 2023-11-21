import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  items:any[];
  players: { id: number; name: string; age: number; category: string; biddingPrice: number; }[];
  constructor(private U:PlayerService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems():void{
    this.U.GetAllPlayers().subscribe(data=>{
      this.items=data;
    });
  }
}
