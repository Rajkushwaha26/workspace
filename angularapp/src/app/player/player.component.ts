import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  item:any[];
  
  constructor(private U:PlayerService) { }

  ngOnInit(): void {
    this.loadItem();
  }
  loadItem():void{
    this.U.GetAllPlayers().subscribe(data=>{
      this.item.push(...data);
    });
  }

}
