from django.contrib import admin
from .models import Guide_Info

class Guide_InfoAdmin(admin.ModelAdmin):
    list_display=('ID','Name','Role','Department')
    
admin.site.register(Guide_Info,Guide_InfoAdmin)