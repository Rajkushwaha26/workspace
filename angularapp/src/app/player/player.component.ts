import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  teamid:number
  name:string
  age:number
  biddingPrice:number
  category:string

  teams:any[]=[
    {teamid:1,name:'Raj',age:23,category:'Circket',biddingPrice:100}
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
