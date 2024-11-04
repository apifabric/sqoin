import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {AUDITLOG_MODULE_DECLARATIONS, AuditLogRoutingModule} from  './AuditLog-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    AuditLogRoutingModule
  ],
  declarations: AUDITLOG_MODULE_DECLARATIONS,
  exports: AUDITLOG_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuditLogModule { }