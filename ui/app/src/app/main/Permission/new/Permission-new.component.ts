import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Permission-new',
  templateUrl: './Permission-new.component.html',
  styleUrls: ['./Permission-new.component.scss']
})
export class PermissionNewComponent {
  @ViewChild("PermissionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}