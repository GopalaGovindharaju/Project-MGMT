from django.urls import path
from . import views

urlpatterns = [
    path('', views.add_student, name='add_student'),
    path('get_review_0_files/', views.get_review_0_files, name='get_review_0_files'),
]