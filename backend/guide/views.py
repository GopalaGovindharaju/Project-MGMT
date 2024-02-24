from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Student_Info 
from student.models import Review_0

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
    
@api_view(['GET'])
def get_review_0_files(request, student_id):
    if request.method == 'GET':
        data = request.data
        Id = data.get('id')
        try:
            review0_info = Review_0.objects.get(ID = Id)

            response_data = {
                'title': review0_info.Title,
                'abstract_url': review0_info.Abstract.url if review0_info.Abstract else None,
                'base_paper_url': review0_info.Base_Paper.url if review0_info.Base_Paper else None,
                'ppt_url': review0_info.PPT.url if review0_info.PPT else None,
            }

            return Response(response_data, status=status.HTTP_200_OK)

        except Review_0.DoesNotExist:
            return Response("Review 0 Files not found", status=status.HTTP_404_NOT_FOUND)
    else:
        return Response("invalid request for file retrive")
