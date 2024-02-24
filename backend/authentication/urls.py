from django.urls import path
from . import views

urlpatterns = [
    path('', views.create_user, name = 'create_user'),
    path('login/', views.verify_user, name = 'verify_user'),
]