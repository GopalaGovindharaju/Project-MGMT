from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Guide_Info

@api_view(['POST'])
def add_guide(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')
        Name = data.get('name')
        Designation = data.get('designation')
        Department = data.get('department')
        PanelMember = data.get('panelmember')

        guide_data = Guide_Info(
            ID = Id,
            Name = Name,
            Designation = Designation,
            Department = Department,
            PanelMember = PanelMember,
        )
        guide_data.save()
        return Response("Guide Added")
    else:
        return Response("Can't Add Guide")