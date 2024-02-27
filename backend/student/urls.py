from django.urls import path
from . import views

urlpatterns = [
    path('0/', views.review_0_upload_files, name = 'review_0_upload_files'),
    path('1/', views.review_1_upload_files, name = 'review_1_upload_files'),
    path('2/', views.review_2_upload_files, name = 'review_2_upload_files'),
    path('3/', views.review_3_upload_files, name = 'review_3_upload_files'),
    path('status/', views.get_review_0_files_status, name = 'get_review_0_files_status'),
    path('status1/', views.get_review_1_files_status, name = 'get_review_1_files_status'),
    path('status2/', views.get_review_2_files_status, name = 'get_review_2_files_status'),
    path('status3/', views.get_review_3_files_status, name = 'get_review_3_files_status'),


]
   
