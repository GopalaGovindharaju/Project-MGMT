from django.urls import path
from . import views

urlpatterns = [
    path('get_batches/', views.get_batches, name = 'get_batches'),
]