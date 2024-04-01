from django.urls import path
from . import views

urlpatterns = [
    path('', views.add_student, name='add_student'),
    path('get_review_0_files/', views.get_review_0_files, name='get_review_0_files'),
    path('get_review_1_files/', views.get_review_1_files, name='get_review_1_files'),
    path('get_review_2_files/', views.get_review_2_files, name='get_review_2_files'),
    path('get_review_3_files/', views.get_review_3_files, name='get_review_3_files'),
    path('fetchingstudname/', views.fetchingstudname, name='fetchingstudname'),
    path('getTeams/', views.get_teams, name='get_teams'),
]