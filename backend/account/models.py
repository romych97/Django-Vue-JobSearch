from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Account(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    email = models.EmailField(max_length=254, null=True)

    roles = models.CharField(
        max_length=50, 
        default='Freelancer',
        choices = [
            ('Freelancer', 'Freelancer'),
            ('FreelancerPlus', 'Freelancer Plus'),
            ('Client', 'Client'),
            ('ClientPlus', 'Client Plus'),
            ('Moderator', 'Moderator'),
            ('Administrator', 'Administrator'),
        ], 
        # null=True
    )
    birthdate = models.DateField(
        blank=True,  
        null=True
    )
    gender = models.CharField(
        max_length=10,
        choices=[
            ('MALE', 'MALE'), ('FEMALE', 'FEMALE')
        ]
    )

    def __str__(self):
        return self.user.username
    