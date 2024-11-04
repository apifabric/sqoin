import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserProfile-card.component.html',
  styleUrls: ['./UserProfile-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserProfile-card]': 'true'
  }
})

export class UserProfileCardComponent {


}