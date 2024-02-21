from django.contrib import admin
from .models import StudentList

class StudentAdmin(admin.ModelAdmin):
    list_display = ('Reg_No', 'Project_Title')

admin.site.register(StudentList, StudentAdmin)