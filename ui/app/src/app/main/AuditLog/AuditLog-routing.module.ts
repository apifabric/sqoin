import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditLogHomeComponent } from './home/AuditLog-home.component';
import { AuditLogNewComponent } from './new/AuditLog-new.component';
import { AuditLogDetailComponent } from './detail/AuditLog-detail.component';

const routes: Routes = [
  {path: '', component: AuditLogHomeComponent},
  { path: 'new', component: AuditLogNewComponent },
  { path: ':id', component: AuditLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'AuditLog-detail-permissions'
      }
    }
  }
];

export const AUDITLOG_MODULE_DECLARATIONS = [
    AuditLogHomeComponent,
    AuditLogNewComponent,
    AuditLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditLogRoutingModule { }