import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupHomeComponent } from './home/Group-home.component';
import { GroupNewComponent } from './new/Group-new.component';
import { GroupDetailComponent } from './detail/Group-detail.component';

const routes: Routes = [
  {path: '', component: GroupHomeComponent},
  { path: 'new', component: GroupNewComponent },
  { path: ':id', component: GroupDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Group-detail-permissions'
      }
    }
  },{
    path: ':group_id/UserGroup', loadChildren: () => import('../UserGroup/UserGroup.module').then(m => m.UserGroupModule),
    data: {
        oPermission: {
            permissionId: 'UserGroup-detail-permissions'
        }
    }
}
];

export const GROUP_MODULE_DECLARATIONS = [
    GroupHomeComponent,
    GroupNewComponent,
    GroupDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }