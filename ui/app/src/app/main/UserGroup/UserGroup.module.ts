import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERGROUP_MODULE_DECLARATIONS, UserGroupRoutingModule} from  './UserGroup-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserGroupRoutingModule
  ],
  declarations: USERGROUP_MODULE_DECLARATIONS,
  exports: USERGROUP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserGroupModule { }