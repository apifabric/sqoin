import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Group-card.component.html',
  styleUrls: ['./Group-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Group-card]': 'true'
  }
})

export class GroupCardComponent {


}