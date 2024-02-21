from django.contrib import admin
from .models import GuideList

class GuideAdmin(admin.ModelAdmin):
    list_display = ('Reg_No', 'Name')

admin.site.register(GuideList, GuideAdmin)