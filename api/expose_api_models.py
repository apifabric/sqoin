from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.AuditLog, method_decorators= method_decorators)
    api.expose_object(database.models.User, method_decorators= method_decorators)
    api.expose_object(database.models.Group, method_decorators= method_decorators)
    api.expose_object(database.models.Message, method_decorators= method_decorators)
    api.expose_object(database.models.Notification, method_decorators= method_decorators)
    api.expose_object(database.models.Permission, method_decorators= method_decorators)
    api.expose_object(database.models.Role, method_decorators= method_decorators)
    api.expose_object(database.models.RolePermission, method_decorators= method_decorators)
    api.expose_object(database.models.UserActivityLog, method_decorators= method_decorators)
    api.expose_object(database.models.UserGroup, method_decorators= method_decorators)
    api.expose_object(database.models.UserProfile, method_decorators= method_decorators)
    api.expose_object(database.models.UserRole, method_decorators= method_decorators)
    return api
