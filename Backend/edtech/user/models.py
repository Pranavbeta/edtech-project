from django.db import models
from django.contrib.auth.models import User

# Define role choices
ROLE_CHOICES = (
    ('admin', 'Admin'),
    ('teacher', 'Teacher'),
    ('student', 'Student'),
)

# Profile model to store user roles
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='student')

    def __str__(self):
        return self.user.username
