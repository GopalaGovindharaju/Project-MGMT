from django.contrib import admin
from .models import Review_0
from .models import Review_2
from .models import Review_1
from .models import Review_3

class Review_0_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Title', 'Abstract', 'Base_Paper', 'PPT', 'Title_Status', 'Abstract_Status', 'Base_Paper_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )

class Review_1_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Architecture', 'Modules', 'Modules_Description', 'Litrature_survey', 'Outcome_Images', 'PPT', 'Architecture_Status', 'Modules_Status', 'Modules_Description_Status', 'Litrature_survey_Status', 'Outcome_Images_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )

class Review_2_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Implementation_80P', 'Report_RoughCopy', 'PPT', 'Project_Publish', 'Implement_Status', 'Report_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status',) 

class Review_3_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Project_Demo', 'Project_Screenshot', 'Report', 'PPT', 'Project_Demo_Status', 'Project_Screenshot_Status', 'Report_Status', 'PPT_Status', 'Guide_Status', 'Hod_Status', )

admin.site.register(Review_0, Review_0_Admin)
admin.site.register(Review_1, Review_1_Admin)
admin.site.register(Review_2, Review_2_Admin)
admin.site.register(Review_3, Review_3_Admin)

