import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionHomeComponent } from './home/Permission-home.component';
import { PermissionNewComponent } from './new/Permission-new.component';
import { PermissionDetailComponent } from './detail/Permission-detail.component';

const routes: Routes = [
  {path: '', component: PermissionHomeComponent},
  { path: 'new', component: PermissionNewComponent },
  { path: ':id', component: PermissionDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Permission-detail-permissions'
      }
    }
  },{
    path: ':permission_id/RolePermission', loadChildren: () => import('../RolePermission/RolePermission.module').then(m => m.RolePermissionModule),
    data: {
        oPermission: {
            permissionId: 'RolePermission-detail-permissions'
        }
    }
}
];

export const PERMISSION_MODULE_DECLARATIONS = [
    PermissionHomeComponent,
    PermissionNewComponent,
    PermissionDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }