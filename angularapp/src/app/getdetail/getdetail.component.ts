import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-getdetail',
  templateUrl: './getdetail.component.html',
  styleUrls: ['./getdetail.component.css']
})
export class GetdetailComponent implements OnInit {
  
  constructor(private U:PlayerService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  this.U.GetAllPlayers().subscribe(data=>{
    this.items=data;
  })

  ngOnInit(): void {
  }

}
