from rest_framework.serializers import ModelSerializer
from .models import Signin

class SigninSerializer(ModelSerializer):
    class Meta:
        model = Signin
        fields = ('User_ID','User_Name','Email','Batch_No','Staff_Incharge','Role','Year')