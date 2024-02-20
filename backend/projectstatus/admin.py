from django.contrib import admin
from .models import ProjectStatus

class ProjectStatusAdmin(admin.ModelAdmin):
    list_display = ('LeadReg_No', 'Staff_Incharge','Date_Of_Meeting','Work_Completed','Work_To_Be_Completed','Review','Row_No')

admin.site.register(ProjectStatus, ProjectStatusAdmin)