import { Component, OnInit } from '@angular/core';
//import {PalyerComponent} from '../palyer';

@Component({
  selector: 'app-palyer',
  templateUrl: './palyer.component.html',
  styleUrls: ['./palyer.component.css']
})
export class PalyerComponent implements OnInit {

  
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
