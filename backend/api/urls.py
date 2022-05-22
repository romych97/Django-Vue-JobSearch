# api/urls.py

from django.urls import path

from . import views

urlpatterns = [


    # POST REQUESTS


    # GET REQUESTS
    path('projects/', views.projects, name='api-data'),
    path('project/<id>/', views.project, name='api-data'),

    path('freelancers/', views.freelancers, name='api-data'),
    path('clients/', views.clients, name='api-data'),
    
]