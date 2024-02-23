from rest_framework import serializers
from .models import Review_0
from .models import Review_1

class Review_0_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Review_0
        fields = ('ID', 'Title', 'Abstract', 'Base_Paper', 'PPT', 'Title_Status', 'Abstract_Status', 'Base_Paper_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )

class Review_1_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Review_1
        feilds = ('ID', 'Architecture', 'Modules', 'Modules_Description', 'Litrature_survey', 'Outcome_Images', 'PPT', 'Architecture', 'Modules', 'Modules_Description', 'Litrature_survey', 'Outcome_Images', 'PPt_Status', 'Guide_Status', 'Hod_Status', )