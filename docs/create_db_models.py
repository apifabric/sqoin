# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Boolean, ForeignKey, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class User(Base):
    """description: Table to store user details."""
    __tablename__ = 'users'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False)
    password_hash = Column(String, nullable=False)
    email = Column(String, nullable=True)
    date_joined = Column(DateTime, default=datetime.datetime.utcnow)

class Role(Base):
    """description: Table to store role details."""
    __tablename__ = 'roles'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    role_name = Column(String, nullable=False)
    description = Column(Text, nullable=True)

class UserRole(Base):
    """description: Intersection table between users and roles."""
    __tablename__ = 'user_roles'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    role_id = Column(Integer, ForeignKey('roles.id'), nullable=False)

class Permission(Base):
    """description: Table to store individual permissions."""
    __tablename__ = 'permissions'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    permission_name = Column(String, nullable=False)
    description = Column(Text, nullable=True)

class RolePermission(Base):
    """description: Intersection table between roles and permissions."""
    __tablename__ = 'role_permissions'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    role_id = Column(Integer, ForeignKey('roles.id'), nullable=False)
    permission_id = Column(Integer, ForeignKey('permissions.id'), nullable=False)
    
class UserProfile(Base):
    """description: Table to store additional user profile information."""
    __tablename__ = 'user_profiles'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)
    birthdate = Column(DateTime, nullable=True)

class UserActivityLog(Base):
    """description: Table to record user activities within the system."""
    __tablename__ = 'user_activity_logs'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    activity = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

class Notification(Base):
    """description: Table to store notifications for users."""
    __tablename__ = 'notifications'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    message = Column(Text, nullable=False)
    read = Column(Boolean, default=False)

class Group(Base):
    """description: Table to store groups to which users can belong."""
    __tablename__ = 'groups'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    group_name = Column(String, nullable=False)
    description = Column(Text, nullable=True)

class UserGroup(Base):
    """description: Intersection table between users and groups."""
    __tablename__ = 'user_groups'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    group_id = Column(Integer, ForeignKey('groups.id'), nullable=False)

class Message(Base):
    """description: Table to store messages sent between users."""
    __tablename__ = 'messages'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    sender_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    receiver_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    content = Column(Text, nullable=False)
    sent_time = Column(DateTime, default=datetime.datetime.utcnow)

class AuditLog(Base):
    """description: Table to store audit trails of changes within the system."""
    __tablename__ = 'audit_logs'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    table_name = Column(String, nullable=False)
    action = Column(String, nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=True)
    details = Column(Text, nullable=True)

# Initialize the SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Create a new session
Session = sessionmaker(bind=engine)
session = Session()

# Insert sample data
user1 = User(username='alice', password_hash='hash1', email='alice@example.com')
user2 = User(username='bob', password_hash='hash2', email='bob@example.com')
role1 = Role(role_name='admin')
role2 = Role(role_name='user')
permission1 = Permission(permission_name='create')
permission2 = Permission(permission_name='read')
user_role1 = UserRole(user_id=1, role_id=1)
user_role2 = UserRole(user_id=2, role_id=2)
role_perm1 = RolePermission(role_id=1, permission_id=1)
role_perm2 = RolePermission(role_id=2, permission_id=2)
user_profile1 = UserProfile(user_id=1, first_name='Alice', last_name='Wonderland', birthdate=datetime.datetime(1985, 7, 26))
user_profile2 = UserProfile(user_id=2, first_name='Bob', last_name='Builder', birthdate=datetime.datetime(1990, 1, 15))
activity_log1 = UserActivityLog(user_id=1, activity='Logged in')
activity_log2 = UserActivityLog(user_id=2, activity='Logged out')
notification1 = Notification(user_id=1, message='Welcome Alice!')
notification2 = Notification(user_id=2, message='Welcome Bob!', read=True)
group1 = Group(group_name='Developers')
group2 = Group(group_name='Designers')
user_group1 = UserGroup(user_id=1, group_id=1)
user_group2 = UserGroup(user_id=2, group_id=2)
message1 = Message(sender_id=1, receiver_id=2, content='Hello Bob!')
message2 = Message(sender_id=2, receiver_id=1, content='Hi Alice!')
audit_log1 = AuditLog(table_name='users', action='insert', user_id=1, details='Added new user Alice.')
audit_log2 = AuditLog(table_name='users', action='insert', user_id=2, details='Added new user Bob.')

# Add entries to the session and commit
session.add_all([
    user1, user2, role1, role2, permission1, permission2,
    user_role1, user_role2, role_perm1, role_perm2,
    user_profile1, user_profile2, activity_log1, activity_log2,
    notification1, notification2, group1, group2, user_group1,
    user_group2, message1, message2, audit_log1, audit_log2
])

session.commit()
session.close()
