from rest_framework import serializers
from .models import Panal_Review0, Panal_Review1, Panal_Review2, Panal_Review3

class Panel_Review0_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Panal_Review0
        feilds = ('ID', 'Name', 'Batch', 'Year', 'Review0_Marks', 'Review0_Feedback','PanalMember_ID','Review0_Status')
        
class Panel_Review1_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Panal_Review1
        feilds = ('ID', 'Name', 'Batch', 'Year', 'Review1_Marks', 'Review1_Feedback','PanalMember_ID','Review1_Status')
        
class Panel_Review2_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Panal_Review2
        feilds = ('ID', 'Name', 'Batch', 'Year', 'Review2_Marks', 'Review2_Feedback','PanalMember_ID','Review2_Status' )
        
class Panel_Review3_Serializer(serializers.ModelSerializer):
    class Meta:
        model = Panal_Review3
        feilds = ('ID', 'Name', 'Batch', 'Year', 'Review3_Marks', 'Review3_Feedback','PanalMember_ID','Review3_Status')