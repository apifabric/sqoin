import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileHomeComponent } from './home/UserProfile-home.component';
import { UserProfileNewComponent } from './new/UserProfile-new.component';
import { UserProfileDetailComponent } from './detail/UserProfile-detail.component';

const routes: Routes = [
  {path: '', component: UserProfileHomeComponent},
  { path: 'new', component: UserProfileNewComponent },
  { path: ':id', component: UserProfileDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserProfile-detail-permissions'
      }
    }
  }
];

export const USERPROFILE_MODULE_DECLARATIONS = [
    UserProfileHomeComponent,
    UserProfileNewComponent,
    UserProfileDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }