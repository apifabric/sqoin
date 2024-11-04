import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './AuditLog-card.component.html',
  styleUrls: ['./AuditLog-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.AuditLog-card]': 'true'
  }
})

export class AuditLogCardComponent {


}