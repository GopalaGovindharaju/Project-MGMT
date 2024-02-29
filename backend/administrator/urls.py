from django.urls import path
from . import views

urlpatterns = [
    path('', views.add_guide, name = 'add_guide'),
    path('getAllTeams/', views.get_all_teams, name = 'get_all_teams'),
    path('getRequestedTeams/', views.get_requested_teams, name = 'get_requested_teams'),
    path('acceptAll/', views.accept_all, name = 'accept_all'),
]