from django.urls import path
from . import views

urlpatterns = [
     path('get/',views.get_project_detail, name='get_project_detail'),
     path('addnewrow/',views.add_new_row, name='add_new_row'),
     path('updatereview/',views.update_row_review, name='update_row_review'),
]