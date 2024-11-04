import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'AuditLog', loadChildren: () => import('./AuditLog/AuditLog.module').then(m => m.AuditLogModule) },
    
        { path: 'Group', loadChildren: () => import('./Group/Group.module').then(m => m.GroupModule) },
    
        { path: 'Message', loadChildren: () => import('./Message/Message.module').then(m => m.MessageModule) },
    
        { path: 'Notification', loadChildren: () => import('./Notification/Notification.module').then(m => m.NotificationModule) },
    
        { path: 'Permission', loadChildren: () => import('./Permission/Permission.module').then(m => m.PermissionModule) },
    
        { path: 'Role', loadChildren: () => import('./Role/Role.module').then(m => m.RoleModule) },
    
        { path: 'RolePermission', loadChildren: () => import('./RolePermission/RolePermission.module').then(m => m.RolePermissionModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserActivityLog', loadChildren: () => import('./UserActivityLog/UserActivityLog.module').then(m => m.UserActivityLogModule) },
    
        { path: 'UserGroup', loadChildren: () => import('./UserGroup/UserGroup.module').then(m => m.UserGroupModule) },
    
        { path: 'UserProfile', loadChildren: () => import('./UserProfile/UserProfile.module').then(m => m.UserProfileModule) },
    
        { path: 'UserRole', loadChildren: () => import('./UserRole/UserRole.module').then(m => m.UserRoleModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }