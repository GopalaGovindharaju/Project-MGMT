from django.urls import path
from . import views

urlpatterns = [
     path('add/',views.add_student, name='add_student'),
     #path('getlist/',views.get_list, name='get_list'),
]