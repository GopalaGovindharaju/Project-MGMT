from django.contrib import admin
from .models import Team

class TeamAdmin(admin.ModelAdmin):
    list_display = ('LeadReg_No', 'Lead','Staff_Incharge','Member1','Member2','Member3')

admin.site.register(Team, TeamAdmin)