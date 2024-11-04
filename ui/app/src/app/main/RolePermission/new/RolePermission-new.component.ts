import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'RolePermission-new',
  templateUrl: './RolePermission-new.component.html',
  styleUrls: ['./RolePermission-new.component.scss']
})
export class RolePermissionNewComponent {
  @ViewChild("RolePermissionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}