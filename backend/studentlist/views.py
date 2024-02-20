from .models import StudentList
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from teamdetail.models import Team
from projectdetails.models import Project
from django.utils import timezone

@api_view(['POST'])
def add_student(request):
    if request.method == 'POST':
        try:
            data = request.data
            Name = data.get('Name')
            Reg_No = data.get('Reg_No')
            Project_Guide = data.get('Project_Guide')

            guide_detail = StudentList(
                Reg_No=Reg_No,
                Project_Title=Name,
            )
            leadList = Team(LeadReg_No=Reg_No)
            guide_detail.save()
            leadList.save()

            update_data = {
                'Project_Guide': Project_Guide,
                'Title': Name,
                'Last_Updated':timezone.now(),
                # Add more fields and values as needed
            }

                
            existing_record = Project.objects.filter(lead_RegNo=Reg_No).first()

            if existing_record:
                # Update the existing record
                existing_record.__dict__.update(update_data)
                existing_record.save()
            else:
                # Create a new record
                new_record = Project(lead_RegNo=Reg_No, **update_data)
                new_record.save()


            return Response("Guide added successfully", status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e)  # Log the error for debugging
            return Response("Internal Server Error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    else:
        return Response("Invalid Request Method", status=status.HTTP_400_BAD_REQUEST)
