import { Component } from '@angular/core';
import { rawData } from './components/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'humber-assignment-1';
  showModal = false;
  public products = rawData;

  onCardClick() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
