from rest_framework import serializers
from .models import SignUp_Table

class SignUp_TableSerializer(serializers.ModelSerializer):
    class Meta:
        model = SignUp_Table
        fields = ('ID', 'Name', 'Role', 'Department')