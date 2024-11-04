# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 04, 2024 07:38:35
# Database: sqlite:////tmp/tmp.k0lC28IYZo/sqoin/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Group(SAFRSBaseX, Base):
    """
    description: Table to store groups to which users can belong.
    """
    __tablename__ = 'groups'
    _s_collection_name = 'Group'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    group_name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    UserGroupList : Mapped[List["UserGroup"]] = relationship(back_populates="group")



class Permission(SAFRSBaseX, Base):
    """
    description: Table to store individual permissions.
    """
    __tablename__ = 'permissions'
    _s_collection_name = 'Permission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    permission_name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    RolePermissionList : Mapped[List["RolePermission"]] = relationship(back_populates="permission")



class Role(SAFRSBaseX, Base):
    """
    description: Table to store role details.
    """
    __tablename__ = 'roles'
    _s_collection_name = 'Role'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    role_name = Column(String, nullable=False)
    description = Column(Text)

    # parent relationships (access parent)

    # child relationships (access children)
    RolePermissionList : Mapped[List["RolePermission"]] = relationship(back_populates="role")
    UserRoleList : Mapped[List["UserRole"]] = relationship(back_populates="role")



class User(SAFRSBaseX, Base):
    """
    description: Table to store user details.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    password_hash = Column(String, nullable=False)
    email = Column(String)
    date_joined = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    AuditLogList : Mapped[List["AuditLog"]] = relationship(back_populates="user")
    MessageList : Mapped[List["Message"]] = relationship(foreign_keys='[Message.receiver_id]', back_populates="receiver")
    senderMessageList : Mapped[List["Message"]] = relationship(foreign_keys='[Message.sender_id]', back_populates="sender")
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="user")
    UserActivityLogList : Mapped[List["UserActivityLog"]] = relationship(back_populates="user")
    UserGroupList : Mapped[List["UserGroup"]] = relationship(back_populates="user")
    UserProfileList : Mapped[List["UserProfile"]] = relationship(back_populates="user")
    UserRoleList : Mapped[List["UserRole"]] = relationship(back_populates="user")



class AuditLog(SAFRSBaseX, Base):
    """
    description: Table to store audit trails of changes within the system.
    """
    __tablename__ = 'audit_logs'
    _s_collection_name = 'AuditLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    table_name = Column(String, nullable=False)
    action = Column(String, nullable=False)
    timestamp = Column(DateTime)
    user_id = Column(ForeignKey('users.id'))
    details = Column(Text)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("AuditLogList"))

    # child relationships (access children)



class Message(SAFRSBaseX, Base):
    """
    description: Table to store messages sent between users.
    """
    __tablename__ = 'messages'
    _s_collection_name = 'Message'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    sender_id = Column(ForeignKey('users.id'), nullable=False)
    receiver_id = Column(ForeignKey('users.id'), nullable=False)
    content = Column(Text, nullable=False)
    sent_time = Column(DateTime)

    # parent relationships (access parent)
    receiver : Mapped["User"] = relationship(foreign_keys='[Message.receiver_id]', back_populates=("MessageList"))
    sender : Mapped["User"] = relationship(foreign_keys='[Message.sender_id]', back_populates=("senderMessageList"))

    # child relationships (access children)



class Notification(SAFRSBaseX, Base):
    """
    description: Table to store notifications for users.
    """
    __tablename__ = 'notifications'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    message = Column(Text, nullable=False)
    read = Column(Boolean)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("NotificationList"))

    # child relationships (access children)



class RolePermission(SAFRSBaseX, Base):
    """
    description: Intersection table between roles and permissions.
    """
    __tablename__ = 'role_permissions'
    _s_collection_name = 'RolePermission'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    role_id = Column(ForeignKey('roles.id'), nullable=False)
    permission_id = Column(ForeignKey('permissions.id'), nullable=False)

    # parent relationships (access parent)
    permission : Mapped["Permission"] = relationship(back_populates=("RolePermissionList"))
    role : Mapped["Role"] = relationship(back_populates=("RolePermissionList"))

    # child relationships (access children)



class UserActivityLog(SAFRSBaseX, Base):
    """
    description: Table to record user activities within the system.
    """
    __tablename__ = 'user_activity_logs'
    _s_collection_name = 'UserActivityLog'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    activity = Column(Text, nullable=False)
    timestamp = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserActivityLogList"))

    # child relationships (access children)



class UserGroup(SAFRSBaseX, Base):
    """
    description: Intersection table between users and groups.
    """
    __tablename__ = 'user_groups'
    _s_collection_name = 'UserGroup'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    group_id = Column(ForeignKey('groups.id'), nullable=False)

    # parent relationships (access parent)
    group : Mapped["Group"] = relationship(back_populates=("UserGroupList"))
    user : Mapped["User"] = relationship(back_populates=("UserGroupList"))

    # child relationships (access children)



class UserProfile(SAFRSBaseX, Base):
    """
    description: Table to store additional user profile information.
    """
    __tablename__ = 'user_profiles'
    _s_collection_name = 'UserProfile'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    first_name = Column(String)
    last_name = Column(String)
    birthdate = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("UserProfileList"))

    # child relationships (access children)



class UserRole(SAFRSBaseX, Base):
    """
    description: Intersection table between users and roles.
    """
    __tablename__ = 'user_roles'
    _s_collection_name = 'UserRole'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.id'), nullable=False)
    role_id = Column(ForeignKey('roles.id'), nullable=False)

    # parent relationships (access parent)
    role : Mapped["Role"] = relationship(back_populates=("UserRoleList"))
    user : Mapped["User"] = relationship(back_populates=("UserRoleList"))

    # child relationships (access children)
