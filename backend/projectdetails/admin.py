from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ('Last_Updated', 'lead_RegNo', 'Title', 'Batch_No', 'Project_Guide', 'Review_0', 'Review_1', 'Review_2', 'Review_3')

admin.site.register(Project, ProjectAdmin)
