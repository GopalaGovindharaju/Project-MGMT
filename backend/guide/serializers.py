from rest_framework import serializers
from .models import Student_Info

class Student_InfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student_Info
        fields = ('ID', 'Name', 'Batch', 'Year', 'Department', 'Guide_ID', )