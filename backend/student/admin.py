from django.contrib import admin
from .models import Review_0
from .models import Review_3

class Review_0_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Title', 'Abstract', 'Base_Paper', 'PPT', 'Title_Status', 'Abstract_Status', 'Base_Paper_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )

class Review_3_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Project_Demo', 'Project_Screenshot', 'Report', 'PPT', 'Project_Demo_Status', 'Project_Screenshot_Status', 'Report_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )
    
admin.site.register(Review_0, Review_0_Admin, Review_3, Review_3_Admin)