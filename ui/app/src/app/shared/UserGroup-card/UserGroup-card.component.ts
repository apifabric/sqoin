import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserGroup-card.component.html',
  styleUrls: ['./UserGroup-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserGroup-card]': 'true'
  }
})

export class UserGroupCardComponent {


}