# serializer.py
from rest_framework.serializers import ModelSerializer
from .models import Project

class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ('Last_Updated', 'lead_RegNo', 'Title', 'Batch_No', 'Project_Guide','Review')
