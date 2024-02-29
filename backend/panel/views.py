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

        if Student_Info.objects.filter(Guide_ID = GuideId).exists():
            subquery = Student_Info.objects.filter(Batch=OuterRef('Batch')).values('ID')
            teams = Student_Info.objects.filter(ID__in=Subquery(subquery))
            serializer = Student_InfoSerializer(teams, many=True)

            result = []
            for batch in serializer.data:
                stud = Review_0.objects.get(ID = batch['ID'])
                if stud.Hod_Status == False:
                    result.append({
                        'ID': batch['ID'],
                        'Name': batch['Name'],
                        'Guide_ID': batch['Guide_ID'],
                        'Year': batch['Year'],
                        'Department': batch['Department'],
                        'Batch': batch['Batch'],
                    })
            return Response(result)