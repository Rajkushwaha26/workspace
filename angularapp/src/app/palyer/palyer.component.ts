import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palyer',
  templateUrl: './palyer.component.html',
  styleUrls: ['./palyer.component.css']
})
export class PalyerComponent implements OnInit {

  constructor() { }
  id:number
  name:string
  age:number
  biddingprice:number
  category:

  team:any[]=[
    {id}
  ]

  ngOnInit(): void {
  }

}
