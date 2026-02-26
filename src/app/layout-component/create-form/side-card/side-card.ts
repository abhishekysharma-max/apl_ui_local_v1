import { Component } from '@angular/core';

@Component({
  selector: 'app-side-card',
  imports: [],
  templateUrl: './side-card.html',
  styleUrl: './side-card.scss',
})
export class SideCard {
  items = ['Template 1', 'Template 1', 'Template 1', 'Template 1', 'Template 1',]

  onClose() {
    console.log('close sidebar');
  }

}
