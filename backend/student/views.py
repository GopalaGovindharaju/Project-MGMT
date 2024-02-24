from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Review_0, Review_1, Review_2, Review_3

@api_view(['POST'])
def review_0_upload_files(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')
        Title = data.get('title')

        Abstract = request.FILES.get('abstract', None)
        Base_Paper = request.FILES.get('basePaper', None)
        PPt = request.FILES.get('ppt', None)

        review0_info = Review_0(
            ID = Id,
            Title = Title,
            Abstract = Abstract,
            Base_Paper = Base_Paper,
            PPT = PPt,
        )
        review0_info.save()

        return Response("Review 0 Files Uploaded", status=status.HTTP_201_CREATED)
    else:
        return Response("File Upload Failed", status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def review_1_upload_files(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')

        Architecture = request.FILES.get('architecture', None)
        Modules = request.FILES.get('modules', None)
        Modules_Description = request.FILES.get('modules_description', None)
        Litrature_survey = request.FILES.get('litrature_survey', None)
        Outcome_Images = request.FILES.get('outcome_images', None)
        PPt = request.FILES.get('ppt', None)

        review1_info = Review_1(
            ID = Id,
            Architecture = Architecture,
            Modules = Modules,
            Modules_Description = Modules_Description,
            Litrature_survey = Litrature_survey,
            Outcome_Images = Outcome_Images,
            PPT = PPt,
        )
        review1_info.save()

        return Response("Review 1 Files Uploaded", status=status.HTTP_201_CREATED)

    else:
        return Response("File Upload Failed", status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def review_2_upload_files(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')
        Project_Publish = data.get('publish_project')
        if(Project_Publish == 'true'):
            Project_Publish = True

        Implementation_80P = request.FILES.get('implementation_80p', None)
        Report_RoughCopy = request.FILES.get('report_roughcopy', None)
        PPt = request.FILES.get('ppt', None)

        review2_info = Review_2(
            ID = Id,
            Implementation_80P = Implementation_80P,
            Report_RoughCopy = Report_RoughCopy,
            Project_Publish = Project_Publish,
            PPT = PPt,
        )
        review2_info.save()

        return Response("Review 2 Files Uploaded", status=status.HTTP_201_CREATED)

    else:
        return Response("File Upload Failed", status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['POST'])
def review_3_upload_files(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')

        Project_Demo = request.FILES.get('project_demo', None)
        Project_Screenshot = request.FILES.get('project_screenshot', None)
        Report = request.FILES.get('report', None)
        PPt = request.FILES.get('ppt', None)

        review3_info = Review_3(
            ID = Id,
            Project_Demo = Project_Demo,
            Project_Screenshot = Project_Screenshot,
            Report = Report,
            PPT = PPt,
        )
        review3_info.save()

        return Response("Review 3 Files Uploaded", status=status.HTTP_201_CREATED)

    else:
        return Response("File Upload Failed", status=status.HTTP_400_BAD_REQUEST)
