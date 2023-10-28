from django.urls import path
from . import views

urlpatterns = [
     path('adds/',views.add_team, name='add_team'),
     path('getlead/',views.get_Lead, name='get_Lead'),
     #path('getlist/',views.get_list, name='get_list'),
]