from django.urls import path
from . import views

urlpatterns = [
    path('', views.review_0_upload_files, name = 'review_0_upload_files'),
]