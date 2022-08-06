from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
class Project(models.Model):
    
    # owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    price = models.IntegerField(default=0)
    text = models.TextField()

    likesVotes = models.IntegerField(default=0)
    dislikesVotes = models.IntegerField(default=0)
    lowRateVotes = models.IntegerField(default=0)

    # rate = models.ManyToManyField('Tag')
    # tags = models.ManyToManyField('Tag')
    # proposals = models.ManyToManyField('Tag')

    # technologies = models.ManyToManyField('Technologies')
    # skills = models.ManyToManyField('Technologies')

    # image = models.ImageField(
    #     upload_to='img', 
    #     null = True, 
    #     blank=True
    # )

    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
    