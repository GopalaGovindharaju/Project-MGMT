from django.contrib import admin
from .models import Review_0

class Review_0_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Title', 'Abstract', 'Base_Paper', 'PPT', 'Title_Status', 'Abstract_Status', 'Base_Paper_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )

class Review_2_Admin(admin.ModuleAdmin):
    list_display = ('ID', 'Implementation_80P', 'Report_RoughCopy', 'PPT', 'Project_Publish', 'Implement_Status', 'Report_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status',) 

admin.site.register(Review_0, Review_0_Admin)