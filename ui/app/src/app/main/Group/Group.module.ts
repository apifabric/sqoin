import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GROUP_MODULE_DECLARATIONS, GroupRoutingModule} from  './Group-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GroupRoutingModule
  ],
  declarations: GROUP_MODULE_DECLARATIONS,
  exports: GROUP_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GroupModule { }