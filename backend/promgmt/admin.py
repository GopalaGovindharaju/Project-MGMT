from django.contrib import admin

from .models import Signin
class SigninAdmin(admin.ModelAdmin):
    list_display = ('User_ID','User_Name','Email','Batch_No','Staff_Incharge','Password','Role','Year')

admin.site.register(Signin,SigninAdmin)
