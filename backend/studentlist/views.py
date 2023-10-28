from .models import StudentList
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from teamdetail.models import Team

@api_view(['POST'])
def add_student(request):
    if request.method == 'POST':
        try:
            data = request.data
            Name = data.get('Name')
            Reg_No = data.get('Reg_No')

            guide_detail = StudentList(
                Reg_No=Reg_No,
                Name=Name,
            )
            leadList = Team(LeadReg_No=Reg_No,Lead=Name)
            guide_detail.save()
            leadList.save()


            return Response("Guide added successfully", status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e)  # Log the error for debugging
            return Response("Internal Server Error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    else:
        return Response("Invalid Request Method", status=status.HTTP_400_BAD_REQUEST)
