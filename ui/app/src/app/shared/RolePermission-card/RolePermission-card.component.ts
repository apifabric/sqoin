import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './RolePermission-card.component.html',
  styleUrls: ['./RolePermission-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.RolePermission-card]': 'true'
  }
})

export class RolePermissionCardComponent {


}