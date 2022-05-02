import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/service/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties : any;
  constructor(private _housing:HousingService) { }

  ngOnInit(): void {
    this._housing.getData().subscribe(
      data=>{
        this.properties = data;
      }
    )
  }

}
