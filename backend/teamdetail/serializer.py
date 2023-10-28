from rest_framework.serializers import ModelSerializer
from .models import Team

class TeamSerial(ModelSerializer):
    class Meta:
        model = Team
        fields = ('LeadReg_No', 'Lead','Staff_Incharge','Member1','Member2','Member3')
