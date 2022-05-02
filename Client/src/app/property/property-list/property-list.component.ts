import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties : Array<any> =[
    {
    "Id" :1,
    "Name":"Birla House",
    "Type": "House",
    "Price" : 12000
  },
  {
    "Id" :2,
    "Name":"Erose Villa",
    "Type": "Villa",
    "Price" : 14000
  },
  {
    "Id" :3,
    "Name":"Mark Hill",
    "Type": "Flat",
    "Price" : 12500
  },
  {
    "Id" :4,
    "Name":"Jp decs",
    "Type": "Flat",
    "Price" : 19000
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
