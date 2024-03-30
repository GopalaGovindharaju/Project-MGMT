from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.db.models import Subquery, OuterRef
from .models import Guide_Info
from guide.models import Student_Info
from guide.serializers import Student_InfoSerializer
from student.models import Review_0, Review_1, Review_2,Review_3

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
    
@api_view(['GET'])
def get_all_teams(request):
    if request.method == 'GET':
        
        subquery = Student_Info.objects.filter(Batch=OuterRef('Batch'), Year=OuterRef('Year')).values('ID')[:1]
        teams = Student_Info.objects.filter(ID__in=Subquery(subquery))
        serializer = Student_InfoSerializer(teams, many=True)

        result_data = []
        for project_detail in serializer.data:
                print(project_detail['ID'])
                team_details = Review_0.objects.get(ID=project_detail['ID'])
                print(team_details)
                guide_details = Guide_Info.objects.get(ID=project_detail['Guide_ID'])
                result_data.append({
                    'ID': project_detail['ID'],
                    'Name': project_detail['Name'],
                    'Guide_ID': project_detail['Guide_ID'],
                    'Year': project_detail['Year'],
                    'Department': project_detail['Department'],
                    'Batch': project_detail['Batch'],
                    'Title': team_details.Title if team_details.Title else "Not Yet Approved",
                    'Guide_Name': guide_details.Name if guide_details.Name else "name",
                })
                print(result_data)

        return Response(result_data)
    else:
        return("Invalid User")
    
@api_view(['GET'])
def get_requested_teams(request):
    if request.method == 'GET':
        
        subquery_0 = Review_0.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')
        subquery_1 = Review_1.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')
        subquery_2 = Review_2.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')
        subquery_3 = Review_3.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')

        teams_0 = Student_Info.objects.filter(ID__in=Subquery(subquery_0)).order_by('Batch')
        teams_1 = Student_Info.objects.filter(ID__in=Subquery(subquery_1)).order_by('Batch')
        teams_2 = Student_Info.objects.filter(ID__in=Subquery(subquery_2)).order_by('Batch')
        teams_3 = Student_Info.objects.filter(ID__in=Subquery(subquery_3)).order_by('Batch')

        teams_0 = filter_unique_per_batch(teams_0)
        teams_1 = filter_unique_per_batch(teams_1)
        teams_2 = filter_unique_per_batch(teams_2)
        teams_3 = filter_unique_per_batch(teams_3)

        serializer_0 = Student_InfoSerializer(teams_0, many=True)
        serializer_1 = Student_InfoSerializer(teams_1, many=True)
        serializer_2 = Student_InfoSerializer(teams_2, many=True)
        serializer_3 = Student_InfoSerializer(teams_3, many=True)

        response_data = {
            'review_0_data': serializer_0.data,
            'review_1_data': serializer_1.data,
            'review_2_data': serializer_2.data,
            'review_3_data': serializer_3.data,
        }

        return Response(response_data)
    else:
        return Response("Invalid Request")

def filter_unique_per_batch(queryset):
    unique_batches = set()
    filtered_queryset = []

    for student_info in queryset:
        if student_info.Batch not in unique_batches:
            unique_batches.add(student_info.Batch)
            filtered_queryset.append(student_info)

    return filtered_queryset

'''def filter_unique_per_year(queryset):
    unique_year = set()
    filtered_queryset = []

    for student_info in queryset:
        if student_info.Year not in unique_year:
            unique_year.add(student_info.Year)
            filtered_queryset.append(student_info)

    return filtered_queryset'''

    
@api_view(['POST'])
def accept_all(request):
    if request.method == 'POST':
        data = request.data

        review_no = data.get('review')

        subquery_0 = Review_0.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')
        subquery_1 = Review_1.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')
        subquery_2 = Review_2.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')
        subquery_3 = Review_3.objects.filter(Guide_Status=True, Hod_Status=False).values('ID')

        teams_0 = Review_0.objects.filter(ID__in=Subquery(subquery_0))
        teams_1 = Review_1.objects.filter(ID__in=Subquery(subquery_1))
        teams_2 = Review_2.objects.filter(ID__in=Subquery(subquery_2))
        teams_3 = Review_3.objects.filter(ID__in=Subquery(subquery_3))

        if review_no == '0':
            for team in teams_0:
                team.Hod_Status = True
                team.save()
            return Response('All permited to review 0')
        elif review_no == '1':
            for team in teams_1:
                team.Hod_Status = True
                team.save()
            return Response('All permited to review 1')
        elif review_no == '2':
            for team in teams_2:
                team.Hod_Status = True
                team.save()
            return Response('All permited to review 2')
        elif review_no == '3':
            for team in teams_3:
                team.Hod_Status = True
                team.save()
            return Response('All permited to review 3')
        else:
            return Response('Dont know the review')
    else:
        return Response("Invalid Request")

