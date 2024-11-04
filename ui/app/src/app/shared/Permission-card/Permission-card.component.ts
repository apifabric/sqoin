import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Permission-card.component.html',
  styleUrls: ['./Permission-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Permission-card]': 'true'
  }
})

export class PermissionCardComponent {


}