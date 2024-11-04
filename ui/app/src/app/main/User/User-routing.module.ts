import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './home/User-home.component';
import { UserNewComponent } from './new/User-new.component';
import { UserDetailComponent } from './detail/User-detail.component';

const routes: Routes = [
  {path: '', component: UserHomeComponent},
  { path: 'new', component: UserNewComponent },
  { path: ':id', component: UserDetailComponent,
    data: {
      oPermission: {
        permissionId: 'User-detail-permissions'
      }
    }
  },{
    path: ':user_id/AuditLog', loadChildren: () => import('../AuditLog/AuditLog.module').then(m => m.AuditLogModule),
    data: {
        oPermission: {
            permissionId: 'AuditLog-detail-permissions'
        }
    }
},{
    path: ':receiver_id/Message', loadChildren: () => import('../Message/Message.module').then(m => m.MessageModule),
    data: {
        oPermission: {
            permissionId: 'Message-detail-permissions'
        }
    }
},{
    path: ':sender_id/Message', loadChildren: () => import('../Message/Message.module').then(m => m.MessageModule),
    data: {
        oPermission: {
            permissionId: 'Message-detail-permissions'
        }
    }
},{
    path: ':user_id/Notification', loadChildren: () => import('../Notification/Notification.module').then(m => m.NotificationModule),
    data: {
        oPermission: {
            permissionId: 'Notification-detail-permissions'
        }
    }
},{
    path: ':user_id/UserActivityLog', loadChildren: () => import('../UserActivityLog/UserActivityLog.module').then(m => m.UserActivityLogModule),
    data: {
        oPermission: {
            permissionId: 'UserActivityLog-detail-permissions'
        }
    }
},{
    path: ':user_id/UserGroup', loadChildren: () => import('../UserGroup/UserGroup.module').then(m => m.UserGroupModule),
    data: {
        oPermission: {
            permissionId: 'UserGroup-detail-permissions'
        }
    }
},{
    path: ':user_id/UserProfile', loadChildren: () => import('../UserProfile/UserProfile.module').then(m => m.UserProfileModule),
    data: {
        oPermission: {
            permissionId: 'UserProfile-detail-permissions'
        }
    }
},{
    path: ':user_id/UserRole', loadChildren: () => import('../UserRole/UserRole.module').then(m => m.UserRoleModule),
    data: {
        oPermission: {
            permissionId: 'UserRole-detail-permissions'
        }
    }
}
];

export const USER_MODULE_DECLARATIONS = [
    UserHomeComponent,
    UserNewComponent,
    UserDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }