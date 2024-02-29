from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Subquery, OuterRef
from guide.models import Student_Info 
from guide.serializers import Student_InfoSerializer
from student.models import Review_0

@api_view(['POST'])
def get_batches(request):
    if request.method == 'POST':
        data = request.data
        GuideId = '002'

        if Student_Info.objects.filter(Guide_ID=GuideId).exists():
            subquery = Student_Info.objects.filter(Guide_ID=GuideId, Batch=OuterRef('Batch')).values('ID')[:1]
            teams = Student_Info.objects.filter(ID__in=Subquery(subquery))

            serializer = Student_InfoSerializer(teams, many=True)

            result = []
            for stud in serializer:
                student = Review_0.objects.filter(ID=stud.ID,Hod_Status=False)
                result.append(student)

            print(student)
            return Response(result)
        else:
            return Response("guideid not found")
    else:
        return Response("invalid")