import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserActivityLog-new',
  templateUrl: './UserActivityLog-new.component.html',
  styleUrls: ['./UserActivityLog-new.component.scss']
})
export class UserActivityLogNewComponent {
  @ViewChild("UserActivityLogForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}