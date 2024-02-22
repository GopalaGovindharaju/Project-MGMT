from django.contrib import admin
from .models import Student_Info

class Student_InfoAdmin(admin.ModelAdmin):
    list_display = ('ID', 'Name', 'Batch', 'Year', 'Department', 'Guide_ID', )
    
admin.site.register(Student_Info,Student_InfoAdmin)

# Register your models here.
