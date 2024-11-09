from django.apps import AppConfig

class UserConfig(AppConfig):  # Make sure the class name matches the app name
    name = 'user'

    def ready(self):
        import user.signal  # Import the signals to ensure they are registered
