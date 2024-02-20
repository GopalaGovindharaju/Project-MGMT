from django.urls import path
from . import views

urlpatterns = [
     path('add/',views.add_guide, name='add_guide'),
     path('getlist/',views.get_list, name='get_list'),
]