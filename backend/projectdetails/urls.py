from django.urls import path
from . import views

urlpatterns = [
     path('',views.get_allteams, name='get_allteams'),
     path('bat/',views.get_allBatch, name='get_allBatch'),
     path('batch/',views.get_Batchlist, name='get_BatchList'),
     path('student/',views.get_student_detail, name='get_student_detail'),
     path('progress',views.update_review, name='update_review'),
]