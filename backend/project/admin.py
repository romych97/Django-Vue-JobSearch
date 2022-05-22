from django.contrib import admin
from project.models import Project
# from django.contrib.auth.models import User
# from django.contrib.auth.admin import UserAdmin

# Register your models here.
# admin.site.register()
# class AccountInLine(admin.StackedInline):
#     model = Project
#     can_delete = False
#     verbose_name_plural = 'Projects'

# class CustomizeUserAdmin(UserAdmin):
#     inlines = (AccountInLine, )

# admin.site.unregister(User)
admin.site.register(Project)