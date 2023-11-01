# serializer.py
from rest_framework.serializers import ModelSerializer
from .models import ProjectStatus

class ProjectStatusSerializer(ModelSerializer):
    class Meta:
        model = ProjectStatus
        fields = ('LeadReg_No', 'Staff_Incharge','Date_Of_Meeting','Work_Completed','Work_To_Be_Completed','Review','Row_No')
