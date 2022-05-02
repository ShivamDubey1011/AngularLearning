import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {

  /**
   * with the help of @Input Decorator we are going to get value from parend component and then we are
   *  using it in html to show the property .
   */
  @Input() Property : any;
  constructor() { }

  ngOnInit(): void {
  }

}
