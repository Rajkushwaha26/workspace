import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-getdetail',
  templateUrl: './getdetail.component.html',
  styleUrls: ['./getdetail.component.css']
})
export class GetdetailComponent implements OnInit {
  items:any[]
  constructor(private U:PlayerService) { 
    this.U.GetAllPlayers().subscribe(data=>
      this.items=data)
    }
  ngOnInit(): void {
  }

}
