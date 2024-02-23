from rest_framework import serializers
from .models import Guide_Info

class Guide_Info_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Guide_Info
        fields = ('ID', 'Name', 'Designation', 'Department', )
