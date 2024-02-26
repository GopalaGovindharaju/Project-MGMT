from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Student_Info 
from student.models import Review_0
from student.models import Review_1
from student.models import Review_2
from student.models import Review_3

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
    
@api_view(['POST'])
def get_review_0_files(request):
    if request.method == 'POST':
        data = request.data
        Id = data.get('id')
        try:
            review0_info = Review_0.objects.get(ID = Id)
            current_site = request.build_absolute_uri('/')

            response_data = {
            'title': review0_info.Title,
            'abstract_url': current_site + review0_info.Abstract.url if review0_info.Abstract else None,
            'base_paper_url': current_site + review0_info.Base_Paper.url if review0_info.Base_Paper else None,
            'ppt_url': current_site + review0_info.PPT.url if review0_info.PPT else None,
        }

            return Response(response_data, status=status.HTTP_200_OK)

        except Review_0.DoesNotExist:
            return Response("Review 0 Files not found", status=status.HTTP_404_NOT_FOUND)
    else:
        return Response("invalid request for file retrive")
    
    
@api_view(['POST'])
def get_review_1_files(request):
    if request.method == 'POST':
        data = request.data
        Id = data.get('id')
        try:
            review1_info = Review_1.objects.get(ID = Id)
            current_site = request.build_absolute_uri('/')

            response_data = {
            'ppt_url': current_site + review1_info.PPT.url if review1_info.PPT else None,
            'system_architecture_url': current_site+review1_info.Architecture.url if review1_info.Architecture else None,
            'module_types_url': current_site + review1_info.Modules.url if review1_info.Modules else None,
            'module_techniques_url': current_site + review1_info.Modules_Description.url if review1_info.Modules_Description else None,
            'literature_survey_url': current_site + review1_info.Litrature_survey.url if review1_info.Litrature_survey else None,
            'expected_outcome_url': current_site + review1_info.Outcome_Images.url if review1_info.Outcome_Images else None,
        }

            return Response(response_data, status=status.HTTP_200_OK)

        except Review_1.DoesNotExist:
            return Response("Review 1 Files not found", status=status.HTTP_404_NOT_FOUND)
    else:
        return Response("invalid request for file retrive")

@api_view(['POST'])
def get_review_2_files(request):
    if request.method == 'POST':
        data = request.data
        Id = data.get('id')
        try:
            review2_info = Review_2.objects.get(ID = Id)
            current_site = request.build_absolute_uri('/')

            response_data = {
            'ppt_url': current_site + review2_info.PPT.url if review2_info.PPT else None,
            'rough_report_url': current_site+review2_info.Report_RoughCopy.url if review2_info.Report_RoughCopy else None,
            'project_screenshot_url': current_site + review2_info.Implementation_80P.url if review2_info.Implementation_80P else None,
            'project_publish_state':review2_info.Project_Publish,
        }

            return Response(response_data, status=status.HTTP_200_OK)

        except Review_2.DoesNotExist:
            return Response("Review 2 Files not found", status=status.HTTP_404_NOT_FOUND)
    else:
        return Response("invalid request for file retrive")
    
@api_view(['POST'])
def get_review_3_files(request):
    if request.method=='POST':
        data=request.data
        Id=data.get('id')
        try:
            review3_info = Review_3.objects.get(ID=Id)
            current_site = request.build_absolute_uri('/')
            
            response_data = {
                'project_demo_video_url':current_site + review3_info.Project_Demo.url if review3_info.Project_Demo else None,
                'project_screenshot_url':current_site+review3_info.Project_Screenshot.url  if review3_info.Project_Screenshot else None,
                'report_url':current_site+review3_info.Report.url if review3_info .Report else None,
                'ppt_url':current_site+review3_info.PPT.url if review3_info. PPT else None,          
            }
            
            return Response(response_data,status=status.HTTP_200_OK)
            
        except Review_3.DoesNotExist:
            return Response("Review 3 Files not found", status= status.HTTP_404_NOT_FOUND)
    else:
        return Response("invalid request for file retrive")