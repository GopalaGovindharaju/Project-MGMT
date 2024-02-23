from django.contrib import admin
from .models import SignUp_Table

class SignUp_TableAdmin(admin.ModelAdmin):
    list_display = ('ID', 'Name', 'Role', 'Department')
    
admin.site.register(SignUp_Table,SignUp_TableAdmin)
