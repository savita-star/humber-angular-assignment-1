import { Component, Input, OnInit } from '@angular/core';
import { RawProductData } from '../modal';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  @Input() products: RawProductData[] | any;
  constructor() { }

  ngOnInit(): void {
  }
}
