from django.shortcuts import render
from serializers import serializers
@api_view(['POST'])
def get_guide_details(request):
    if request.method == 'POST':
        data = request.data
        Guide_ID=data.get('id')
        
        if Student_Info.objects.filter(Guide_ID=Guide_ID).exists():
            subquery = Student_Info.objects.filter(Guide_ID=Id, Batch=OuterRef('Batch')).values('ID')
            teams = Student_Info.objects.filter(ID__in=Subquery(subquery))
            serializer = Student_InfoSerializer(teams, many=True)