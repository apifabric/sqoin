import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserActivityLogHomeComponent } from './home/UserActivityLog-home.component';
import { UserActivityLogNewComponent } from './new/UserActivityLog-new.component';
import { UserActivityLogDetailComponent } from './detail/UserActivityLog-detail.component';

const routes: Routes = [
  {path: '', component: UserActivityLogHomeComponent},
  { path: 'new', component: UserActivityLogNewComponent },
  { path: ':id', component: UserActivityLogDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserActivityLog-detail-permissions'
      }
    }
  }
];

export const USERACTIVITYLOG_MODULE_DECLARATIONS = [
    UserActivityLogHomeComponent,
    UserActivityLogNewComponent,
    UserActivityLogDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserActivityLogRoutingModule { }