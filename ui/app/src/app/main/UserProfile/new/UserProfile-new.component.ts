import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserProfile-new',
  templateUrl: './UserProfile-new.component.html',
  styleUrls: ['./UserProfile-new.component.scss']
})
export class UserProfileNewComponent {
  @ViewChild("UserProfileForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}