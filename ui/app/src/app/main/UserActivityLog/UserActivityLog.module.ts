import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERACTIVITYLOG_MODULE_DECLARATIONS, UserActivityLogRoutingModule} from  './UserActivityLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserActivityLogRoutingModule
  ],
  declarations: USERACTIVITYLOG_MODULE_DECLARATIONS,
  exports: USERACTIVITYLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserActivityLogModule { }