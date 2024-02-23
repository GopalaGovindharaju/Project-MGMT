from django.contrib import admin
from .models import Review_0
from .models import Review_1

class Review_0_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Title', 'Abstract', 'Base_Paper', 'PPT', 'Title_Status', 'Abstract_Status', 'Base_Paper_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )

class Review_1_Admin(admin.ModelAdmin):
    list_display = ('ID', 'Architecture', 'Modules', 'Modules_Description', 'Litrature_survey', 'Outcome_Images', 'PPT', 'Architecture', 'Modules', 'Modules_Description', 'Litrature_survey', 'Outcome_Images', 'PPt_Status', 'Guide_Status', 'Hod_Status', )
    
    
admin.site.register(Review_0, Review_0_Admin)
admin.site.register(Review_1,Review_1_Admin)