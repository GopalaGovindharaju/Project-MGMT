from rest_framework import serializers
from .models import Review_0
from .models import Review_3

class Review_0_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Review_0
        fields = ('ID', 'Title', 'Abstract', 'Base_Paper', 'PPT', 'Title_Status', 'Abstract_Status', 'Base_Paper_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )

class Review_3_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Review_3
        fields = ('ID', 'Project_Demo', 'Project_Screenshot', 'Report', 'PPT', 'Project_Demo_Status', 'Project_Screenshot_Status', 'Report_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )