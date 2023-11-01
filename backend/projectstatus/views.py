from .models import ProjectStatus
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import ProjectStatusSerializer
from rest_framework import status


@api_view(['POST'])
def get_project_detail(request):
    if request.method == 'POST':
        data = request.data
        lead_RegNo = data.get('Lead_Regno') 

        if not lead_RegNo:
            return Response({'error': 'Lead_Regno is required'}, status=400)

        try:
            # Assuming you have a ProjectStatus model with a field named 'LeadReg_No'
            projects = ProjectStatus.objects.filter(LeadReg_No=lead_RegNo)
        except ProjectStatus.DoesNotExist:
            return Response({'error': 'Projects not found'}, status=404)

        # Serialize the list of projects
        serializer = ProjectStatusSerializer(projects, many=True)

        return Response(serializer.data)
    
@api_view(['POST'])
def add_new_row(request):
    if request.method == 'POST':
        # Deserialize the request data using your serializer
        serializer = ProjectStatusSerializer(data=request.data)
        print(request.data)

        if serializer.is_valid():
            # Save the new row to the database
            serializer.save()

            # Return a success response
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        # Return a response with validation errors if the data is not valid
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['POST'])
def update_row_review(request):
    if request.method == 'POST':
        try:
            data = request.data
            lead_RegNo = data.get('lead_RegNo') 
            Row_No = data.get('Row_No')
            new_review_status = data.get('Review')

            # Retrieve the corresponding ProjectStatus instance
            project_status = ProjectStatus.objects.get(LeadReg_No=lead_RegNo,Row_No=Row_No)

            # Update the Review field
            project_status.Review = new_review_status
            project_status.save()

            # Serialize the updated instance
            serializer = ProjectStatusSerializer(project_status)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except ProjectStatus.DoesNotExist:
            return Response({'error': 'Row not found'}, status=status.HTTP_404_NOT_FOUND)

        except Exception as e:
            import traceback
            traceback.print_exc()
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
