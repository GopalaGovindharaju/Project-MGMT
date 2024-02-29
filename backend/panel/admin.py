from django.contrib import admin
from .models import Panal_Review0,Panal_Review1,Panal_Review2,Panal_Review3

class Panel_Review0Admin(admin.ModelAdmin):
    list_display = ('ID', 'Name', 'Batch', 'Year', 'Review0_Marks', 'Review0_Feedback', 'PanalMember_ID','Review0_Status',)
    
admin.site.register(Panal_Review0,Panel_Review0Admin)

class Panel_Review1Admin(admin.ModelAdmin):
    list_display = ('ID', 'Name', 'Batch', 'Year', 'Review1_Marks', 'Review1_Feedback', 'PanalMember_ID','Review1_Status')
    
admin.site.register(Panal_Review1,Panel_Review1Admin)

class Panel_Review2Admin(admin.ModelAdmin):
    list_display = ('ID', 'Name', 'Batch', 'Year', 'Review2_Marks', 'Review2_Feedback','PanalMember_ID','Review2_Status' )
    
admin.site.register(Panal_Review2,Panel_Review2Admin)

class Panel_Review3Admin(admin.ModelAdmin):
    list_display = ('ID', 'Name', 'Batch', 'Year', 'Review3_Marks', 'Review3_Feedback','PanalMember_ID','Review3_Status' )
    
admin.site.register(Panal_Review3,Panel_Review3Admin)
