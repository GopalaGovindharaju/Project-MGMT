from rest_framework.serializers import ModelSerializer
from .models import GuideList

class GuideSerial(ModelSerializer):
    class Meta:
        model = GuideList
        fields = ('Reg_No', 'Name')
