import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGroupHomeComponent } from './home/UserGroup-home.component';
import { UserGroupNewComponent } from './new/UserGroup-new.component';
import { UserGroupDetailComponent } from './detail/UserGroup-detail.component';

const routes: Routes = [
  {path: '', component: UserGroupHomeComponent},
  { path: 'new', component: UserGroupNewComponent },
  { path: ':id', component: UserGroupDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserGroup-detail-permissions'
      }
    }
  }
];

export const USERGROUP_MODULE_DECLARATIONS = [
    UserGroupHomeComponent,
    UserGroupNewComponent,
    UserGroupDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserGroupRoutingModule { }