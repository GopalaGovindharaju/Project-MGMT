from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.core.exceptions import ValidationError
from django.core.validators import URLValidator
from .models import Review_0, Review_1, Review_2, Review_3
from guide.models import Student_Info

@api_view(['POST'])
def review_0_upload_files(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')
        Title = data.get('title')

        Abstract = request.FILES.get('abstract', None)
        Base_Paper = request.FILES.get('basePaper', None)
        PPt = request.FILES.get('ppt', None)
            
        #year yet to be added for filter
        if Student_Info.objects.filter(ID = Id).exists():
            student_data = Student_Info.objects.get(ID = Id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)
            
        if Abstract == None and Base_Paper == None and PPt == None and Title == None:
            return Response("File Upload Skipped for URLs", status=status.HTTP_200_OK)
            
        for team_member in team_members:
            review0_info = Review_0.objects.get(ID = team_member.ID)
            review0_info.Title = Title
            review0_info.Abstract = Abstract if Abstract is not None else review0_info.Abstract
            review0_info.Base_Paper = Base_Paper if Base_Paper is not None else review0_info.Base_Paper
            review0_info.PPT = PPt if PPt is not None else review0_info.PPT
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

        #year yet to be added for filter
        if Student_Info.objects.filter(ID = Id).exists():
            student_data = Student_Info.objects.get(ID = Id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)
        
        if Architecture == None and Modules == None and Modules_Description == None and Litrature_survey == None and Outcome_Images == None and PPt == None:
            return Response("File Upload Skipped for URLs", status=status.HTTP_200_OK)

        for team_member in team_members:
            review1_info = Review_1.objects.get(ID = team_member.ID)
            review1_info.Architecture = Architecture if Architecture is not None else review1_info.Architecture
            review1_info.Modules = Modules if Modules is not None else review1_info.Modules
            review1_info.Modules_Description = Modules_Description if Modules_Description is not None else review1_info.Modules_Description
            review1_info.Litrature_survey = Litrature_survey if Litrature_survey is not None else review1_info.Litrature_survey
            review1_info.Outcome_Images = Outcome_Images if Outcome_Images is not None else review1_info.Outcome_Images
            review1_info.PPT = PPt if PPt is not None else review1_info.PPT
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
        else:
            Project_Publish = False

        Implementation_80P = request.FILES.get('implementation_80p', None)
        Report_RoughCopy = request.FILES.get('report_roughcopy', None)
        PPt = request.FILES.get('ppt', None)

        #year yet to be added for filter
        if Student_Info.objects.filter(ID = Id).exists():
            student_data = Student_Info.objects.get(ID = Id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)

        if Implementation_80P == None and Report_RoughCopy == None and Project_Publish == None and PPt == None:
            return Response("File Upload Skipped for URLs", status=status.HTTP_200_OK)
        
        for team_member in team_members:
            review2_info = Review_2.objects.get(ID = team_member.ID)
            review2_info.Implementation_80P = Implementation_80P if Implementation_80P is not None else review2_info.Implementation_80P
            review2_info.Report_RoughCopy = Report_RoughCopy if Report_RoughCopy is not None else review2_info.Report_RoughCopy
            review2_info.Project_Publish = Project_Publish
            review2_info.PPT = PPt if PPt is not None else review2_info.PPT
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

        #year yet to be added for filter
        if Student_Info.objects.filter(ID = Id).exists():
            student_data = Student_Info.objects.get(ID = Id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)

        if Project_Demo == None and Project_Screenshot == None and Report == None and PPt == None:
            return Response("File Upload Skipped for URLs", status=status.HTTP_200_OK)

        for team_member in team_members:
            review3_info = Review_3.objects.get(ID = team_member.ID)
            review3_info.Project_Demo = Project_Demo if Project_Demo is not None else review3_info.Project_Demo
            review3_info.Project_Screenshot = Project_Screenshot if Project_Screenshot is not None else review3_info.Project_Screenshot
            review3_info.Report = Report if Report is not None else review3_info.Report
            review3_info.PPT = PPt if PPt is not None else review3_info.PPT
            review3_info.save()

        return Response("Review 3 Files Uploaded", status=status.HTTP_201_CREATED)

    else:
        return Response("File Upload Failed", status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def get_review_0_files_status(request):
    if request.method == 'POST':
        data = request.data
        review_id = data.get('id')
        Title_Status=data.get('title_status')
        Abstract_Status=data.get('abstract_status')
        Base_Paper_Status=data.get('basepaper_status')
        PPt_Status=data.get('ppt_status')
       
        if Student_Info.objects.filter(ID = review_id).exists():
            student_data = Student_Info.objects.get(ID = review_id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)

        for team_member in team_members:
            review_info = Review_0.objects.get(ID=team_member.ID)

            if Title_Status == 'approve':
                review_info.Title_Status = True
            else :
                review_info.Title_Status= False
                
            if Abstract_Status == 'approve':
                review_info.Abstract_Status = True
            else :
                review_info.Abstract_Status=False
        
            if Base_Paper_Status == 'approve':
                review_info.Base_Paper_Status = True
            else :
                review_info.Base_Paper_Status=False
                
            if PPt_Status == 'approve':
                review_info.PPt_Status = True
            else :
                review_info.PPt_Status=False

            review_info.save()
        return Response('saved')
    else:
        return Response("Status Upload Failed", status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def get_review_1_files_status(request):
    if request.method == 'POST':
        data = request.data
        review_id = data.get('id')
        Architecture_Status=data.get('sysarchitecture_status')
        Modules_Status=data.get('moduletypes_status')
        Modules_Description_Status=data.get('moduletech_status')
        Litrature_survey_Status=data.get('literature_status')
        Outcome_Images_Status=data.get('outcome_status')
        PPt_Status=data.get('ppt_status')

        if Student_Info.objects.filter(ID = review_id).exists():
            student_data = Student_Info.objects.get(ID = review_id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)

        for team_member in team_members:
            review_info = Review_1.objects.get(ID=team_member.ID)

            if Architecture_Status == 'approve':
                review_info.Architecture_Status = True
            else :
                review_info.Architecture_Status= False
                
            if Modules_Status == 'approve':
                review_info.Modules_Status = True
            else :
                review_info.Modules_Status=False
        
            if Modules_Description_Status == 'approve':
                review_info.Modules_Description_Status = True
            else :
                review_info.Modules_Description_Status=False
                
            if Litrature_survey_Status == 'approve':
                review_info.Litrature_survey_Status = True
            else :
                review_info.Litrature_survey_Status=False
                
            if Outcome_Images_Status == 'approve':
                review_info.Outcome_Images_Status = True
            else :
                review_info.Outcome_Images_Status=False
                
            if PPt_Status == 'approve':
                review_info.PPt_Status = True
            else :
                review_info.PPt_Status=False

            review_info.save()
        return Response('saved')
    else:
        return Response("Status Upload Failed", status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def get_review_2_files_status(request):
    if request.method == 'POST':
        data = request.data
        review_id = data.get('id')
        Implement_Status=data.get('screenshot_status')
        Report_Status=data.get('roughreport_status')
        PPt_Status=data.get('ppt_status')

        if Student_Info.objects.filter(ID = review_id).exists():
            student_data = Student_Info.objects.get(ID = review_id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)

        for team_member in team_members:
            review_info = Review_2.objects.get(ID=team_member.ID)

            if Implement_Status == 'approve':
                review_info.Implement_Status = True
            else :
                review_info.Implement_Status= False
                
            if Report_Status == 'approve':
                review_info.Report_Status = True
            else :
                review_info.Report_Status=False
                
            if PPt_Status == 'approve':
                review_info.PPt_Status = True
            else :
                review_info.PPt_Status=False

            review_info.save()
        return Response('saved')
    else:
        return Response("Status Upload Failed", status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def get_review_3_files_status(request):
    if request.method == 'POST':
        data = request.data
        review_id = data.get('id')
        Project_Demo_Status=data.get('demo_status')
        Project_Screenshot_Status=data.get('project_screenshot')
        Report_Status=data.get('report')
        PPT_Status=data.get('abstract_status')

        if Student_Info.objects.filter(ID = review_id).exists():
            student_data = Student_Info.objects.get(ID = review_id)
            student_batch = student_data.Batch
            team_members = Student_Info.objects.filter(Batch = student_batch)

        for team_member in team_members:
            review_info = Review_3.objects.get(ID=team_member.ID)

            if Project_Demo_Status == 'approve':
                review_info.Project_Demo_Status = True
            else :
                review_info.Project_Demo_Status= False
                
            if Project_Screenshot_Status == 'approve':
                review_info.Project_Screenshot_Status = True
            else :
                review_info.Project_Screenshot_Status=False
        
            if Report_Status == 'approve':
                review_info.Report_Status = True
            else :
                review_info.Report_Status=False
                    
            if PPT_Status == 'approve':
                review_info.PPT_Status = True
            else :
                review_info.PPT_Status=False

            review_info.save()
        return Response('saved')
    else:
        return Response("Status Upload Failed", status=status.HTTP_400_BAD_REQUEST)