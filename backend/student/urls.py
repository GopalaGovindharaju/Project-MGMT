from django.urls import path
from . import views

urlpatterns = [
    path('0/', views.review_0_upload_files, name = 'review_0_upload_files'),
    path('1/', views.review_1_upload_files, name = 'review_1_upload_files'),
    path('2/', views.review_2_upload_files, name = 'review_2_upload_files'),
    path('3/', views.review_3_upload_files, name = 'review_3_upload_files'),
]