import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RawProductData } from '../models/raw-product-data.interface';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() product: RawProductData | any;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit(true);
  }

}
