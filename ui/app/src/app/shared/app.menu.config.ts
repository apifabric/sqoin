import { MenuRootItem } from 'ontimize-web-ngx';

import { AuditLogCardComponent } from './AuditLog-card/AuditLog-card.component';

import { GroupCardComponent } from './Group-card/Group-card.component';

import { MessageCardComponent } from './Message-card/Message-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { PermissionCardComponent } from './Permission-card/Permission-card.component';

import { RoleCardComponent } from './Role-card/Role-card.component';

import { RolePermissionCardComponent } from './RolePermission-card/RolePermission-card.component';

import { UserCardComponent } from './User-card/User-card.component';

import { UserActivityLogCardComponent } from './UserActivityLog-card/UserActivityLog-card.component';

import { UserGroupCardComponent } from './UserGroup-card/UserGroup-card.component';

import { UserProfileCardComponent } from './UserProfile-card/UserProfile-card.component';

import { UserRoleCardComponent } from './UserRole-card/UserRole-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'AuditLog', name: 'AUDITLOG', icon: 'view_list', route: '/main/AuditLog' }
    
        ,{ id: 'Group', name: 'GROUP', icon: 'view_list', route: '/main/Group' }
    
        ,{ id: 'Message', name: 'MESSAGE', icon: 'view_list', route: '/main/Message' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'Permission', name: 'PERMISSION', icon: 'view_list', route: '/main/Permission' }
    
        ,{ id: 'Role', name: 'ROLE', icon: 'view_list', route: '/main/Role' }
    
        ,{ id: 'RolePermission', name: 'ROLEPERMISSION', icon: 'view_list', route: '/main/RolePermission' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
        ,{ id: 'UserActivityLog', name: 'USERACTIVITYLOG', icon: 'view_list', route: '/main/UserActivityLog' }
    
        ,{ id: 'UserGroup', name: 'USERGROUP', icon: 'view_list', route: '/main/UserGroup' }
    
        ,{ id: 'UserProfile', name: 'USERPROFILE', icon: 'view_list', route: '/main/UserProfile' }
    
        ,{ id: 'UserRole', name: 'USERROLE', icon: 'view_list', route: '/main/UserRole' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    AuditLogCardComponent

    ,GroupCardComponent

    ,MessageCardComponent

    ,NotificationCardComponent

    ,PermissionCardComponent

    ,RoleCardComponent

    ,RolePermissionCardComponent

    ,UserCardComponent

    ,UserActivityLogCardComponent

    ,UserGroupCardComponent

    ,UserProfileCardComponent

    ,UserRoleCardComponent

];