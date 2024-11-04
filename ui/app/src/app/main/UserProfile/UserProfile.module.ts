import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERPROFILE_MODULE_DECLARATIONS, UserProfileRoutingModule} from  './UserProfile-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserProfileRoutingModule
  ],
  declarations: USERPROFILE_MODULE_DECLARATIONS,
  exports: USERPROFILE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserProfileModule { }