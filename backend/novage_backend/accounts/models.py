from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    phone = models.CharField(max_length=10, blank=True, null=True)
    role = models.CharField(
        max_length=20,
        choices=[
            ('admin', 'Admin'),
            ('caregiver', 'Caregiver'),
            ('elder', 'Elder'),
        ],
        default='elder'
    )

    def __str__(self):
        return self.username
