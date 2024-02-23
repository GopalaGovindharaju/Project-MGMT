from django.urls import path
from . import views

urlpatterns = [
    path('', views.add_student, name='add_student'),
]