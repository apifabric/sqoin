import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolePermissionHomeComponent } from './home/RolePermission-home.component';
import { RolePermissionNewComponent } from './new/RolePermission-new.component';
import { RolePermissionDetailComponent } from './detail/RolePermission-detail.component';

const routes: Routes = [
  {path: '', component: RolePermissionHomeComponent},
  { path: 'new', component: RolePermissionNewComponent },
  { path: ':id', component: RolePermissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'RolePermission-detail-permissions'
      }
    }
  }
];

export const ROLEPERMISSION_MODULE_DECLARATIONS = [
    RolePermissionHomeComponent,
    RolePermissionNewComponent,
    RolePermissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolePermissionRoutingModule { }