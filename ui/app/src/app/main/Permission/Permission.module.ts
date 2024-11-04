import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {PERMISSION_MODULE_DECLARATIONS, PermissionRoutingModule} from  './Permission-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    PermissionRoutingModule
  ],
  declarations: PERMISSION_MODULE_DECLARATIONS,
  exports: PERMISSION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PermissionModule { }