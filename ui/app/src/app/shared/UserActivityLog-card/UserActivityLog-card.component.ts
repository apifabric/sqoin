import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserActivityLog-card.component.html',
  styleUrls: ['./UserActivityLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserActivityLog-card]': 'true'
  }
})

export class UserActivityLogCardComponent {


}