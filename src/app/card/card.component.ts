import { Component, OnInit } from '@angular/core';
import { PRODUCT } from '../products';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
products = PRODUCT;
  constructor() { }


}
