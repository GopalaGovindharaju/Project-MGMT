from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Team
from .serializer import TeamSerial

@api_view(['POST'])
def add_team(request):
    print("checkings")
    if request.method == 'POST':
        try:
            M_Name = request.data.get('MemberName')
            M_Regno = request.data.get('MemberReg_No')
            L_RegNo = request.data.get('LeadRegNo')
            member = M_Name + "-" + M_Regno
            obj = Team.objects.get(LeadReg_No=L_RegNo)
            serial = TeamSerial(obj)

            if not obj.Member1:
                obj.Member1 = member
            elif not obj.Member2:
                obj.Member2 = member
            elif not obj.Member3:
                obj.Member3 = member
            else:
                return Response('limit reached')

            obj.save()  # Save the updated object

            return Response(serial.data)
        except Team.DoesNotExist:
            return Response({'message': 'LeadRegno not found.'}, status=404)

    return Response({'message': 'Invalid request.'}, status=400)
        

@api_view(['POST'])
def get_Lead(request):
    if request.method == 'POST':
        try:
            Reg_No = request.data.get('Lead_Regno')
            leadName = Team.objects.get(LeadReg_No=Reg_No)
            serial = TeamSerial(leadName)
            return Response(serial.data)
        except Team.DoesNotExist:
            return Response("No lead found with the provided Lead_Regno", status=404)


