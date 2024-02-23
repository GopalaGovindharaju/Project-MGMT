from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Review_0

@api_view(['POST'])
def review_0_upload_files(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')
        Title = data.get('title')

        Abstract = request.FILES.get('abstract')
        Base_Paper = request.FILES.get('base_paper')
        PPt = request.FILES.get('ppt')
        Title_Status = data.get('title_status')
        Abstract_Status = data.get('abstract_status')
        Base_Paper_Status = data.get('base_paper_status')
        PPT_Status = data.get('ppt_status')
        Guide_Status = data.get('guide_status')
        Hod_Status = data.get('hod_status')


        '''pdf5 = request.FILES.get('pdf5')
        image = request.FILES.get('image')
        video = request.FILES.get('video')'''

        return Response("Files Uploaded", status=status.HTTP_201_CREATED)

    else:
        return Response("File Upload Failed", status=status.HTTP_400_BAD_REQUEST)
