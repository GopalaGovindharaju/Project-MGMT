from django.urls import path
from . import views

urlpatterns = [
     path('signin/',views.create_employee, name='create_employee'),
     path('',views.validate_employee, name='validate_employee'),
     path('stu_profile/',views.student_profile, name='student_profile'),
]