import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'AuditLog-new',
  templateUrl: './AuditLog-new.component.html',
  styleUrls: ['./AuditLog-new.component.scss']
})
export class AuditLogNewComponent {
  @ViewChild("AuditLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}