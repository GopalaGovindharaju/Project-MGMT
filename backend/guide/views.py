from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Student_Info 

@api_view(['POST'])
def add_student(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')
        Name = data.get('name')
        Batch = data.get('batch')
        Year = data.get('year')
        Department = data.get('department')
        Guide_ID = data.get('guide_id')

        student_data = Student_Info(
            ID = Id,
            Name = Name,
            Batch = Batch,
            Year = Year,
            Department = Department,
            Guide_ID = Guide_ID,
        )

        student_data.save()
        return Response("Student Added")

    else:
        return Response("Student Can't Added")
