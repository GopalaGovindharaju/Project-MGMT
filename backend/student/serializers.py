from rest_framework import serializers
from .models import Review_0

class Review_0_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Review_0
        fields = ('ID', 'Title', 'Abstract', 'Base_Paper', 'PPT', 'Title_Status', 'Abstract_Status', 'Base_Paper_Status', 'PPt_Status', 'Guide_Status', 'Hod_Status', )