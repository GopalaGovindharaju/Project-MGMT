from .models import Project
from rest_framework.response import Response
from rest_framework.decorators import api_view
from projectdetails.projectserial import ProjectSerializer

from django.db.models import Q

@api_view(['GET'])
def get_allteams(request):
    project_guide = request.query_params.get('guide', None)

    if project_guide:
        data = Project.objects.filter(Project_Guide=project_guide)
    else:
        data = Project.objects.all()

    serial = ProjectSerializer(data, many=True)
    return Response(serial.data)

@api_view(['GET'])
def get_allBatch(request):
    project_batch = request.query_params.get('batch', None)
    project_name = request.query_params.get('name', None)

    if project_batch:
        data = Project.objects.filter(Batch_No=project_batch, Project_Guide=project_name)
    else:
        data = Project.objects.filter(Project_Guide=project_name)

    serial = ProjectSerializer(data, many=True)
    return Response(serial.data)

@api_view(['POST'])
def get_Batchlist(request):
    if request.method == 'POST':
        guide_name = request.data.get('guide_name', None)

        if guide_name is not None:
            # Filter projects based on the guide name
            data = Project.objects.filter(Project_Guide=guide_name).values_list('Batch_No', flat=True)
            batch_numbers = list(data)
            return Response({'Batch_No': batch_numbers})
        else:
            # Return a bad request response if guide name is not provided
            return Response({'error': 'Guide name not provided'})

@api_view(['POST'])
def get_student_detail(request):
    if request.method == 'POST':
        data = request.data
        lead_RegNo = data.get('lead_RegNo')  # Assuming 'lead_RegNo' is the key in the POST data

        if not lead_RegNo:
            return Response({'error': 'lead_RegNo is required'}, status=400)

        try:
            # Assuming you have a Student model with a field named 'lead_RegNo'
            student = Project.objects.get(lead_RegNo=lead_RegNo)
        except Project.DoesNotExist:
            return Response({'error': 'Student not found'}, status=404)

        # Serialize the student data
        serializer = ProjectSerializer(student)

        return Response(serializer.data)