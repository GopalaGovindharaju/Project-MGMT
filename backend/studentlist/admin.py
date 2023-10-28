from django.contrib import admin
from .models import StudentList

class StudentAdmin(admin.ModelAdmin):
    list_display = ('Reg_No', 'Name')

admin.site.register(StudentList, StudentAdmin)