from .models import GuideList
from rest_framework.response import Response
from rest_framework.decorators import api_view
from guidelist.guideserial import GuideSerial
from rest_framework import status

@api_view(['POST'])
def add_guide(request):
    if request.method == 'POST':
        try:
            data = request.data
            Name = data.get('Name')
            Reg_No = data.get('Reg_No')
            print(Name,Reg_No)

            guide_detail = GuideList(
                Reg_No=Reg_No,
                Name=Name,
            )
            guide_detail.save()

            return Response("Guide added successfully", status=status.HTTP_201_CREATED)

        except Exception as e:
            print(e)  # Log the error for debugging
            return Response("Internal Server Error", status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    else:
        return Response("Invalid Request Method", status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_list(request):
    data = GuideList.objects.values_list('Name', flat=True)
    names = list(data)
    return Response({'Names': names})
