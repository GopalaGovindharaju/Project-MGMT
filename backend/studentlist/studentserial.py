from rest_framework.serializers import ModelSerializer
from .models import StudentList

class StudentSerial(ModelSerializer):
    class Meta:
        model = StudentList
        fields = ('Reg_No', 'Project_Title')
