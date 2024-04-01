from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.db.models import Subquery, OuterRef
from guide.models import Student_Info 
from guide.serializers import Student_InfoSerializer
from student.models import Review_0, Review_1, Review_2, Review_3
from .models import Panal_Review0, Panal_Review1, Panal_Review2, Panal_Review3
from .serializers import Panel_Review0_Serializer,Panel_Review1_Serializer,Panel_Review2_Serializer,Panel_Review3_Serializer
@api_view(['POST'])
def get_batches(request):
    if request.method == 'POST':
        data = request.data
        GuideId = data.get('id')
        Review_No = data.get('reviewNo')

        if Student_Info.objects.filter(Guide_ID = GuideId).exists():
            subquery = Student_Info.objects.filter( Batch=OuterRef('Batch')).values('ID')
            teams = Student_Info.objects.filter(ID__in=Subquery(subquery))
            print(teams)
            serializer = Student_InfoSerializer(teams, many=True)
            print(serializer.data)
            result = []
            for batch in serializer.data:
                if Review_No == '0':
                    stud = Review_0.objects.get(ID = batch['ID'])
                    if stud.Hod_Status == True:
                        result.append({
                            'ID': batch['ID'],
                            'Name': batch['Name'],
                            'Guide_ID': batch['Guide_ID'],
                            'Year': batch['Year'],
                            'Department': batch['Department'],
                            'Batch': batch['Batch'],
                        })
                elif Review_No == '1':
                    stud = Review_1.objects.get(ID = batch['ID'])
                    if stud.Hod_Status == True:
                        result.append({
                            'ID': batch['ID'],
                            'Name': batch['Name'],
                            'Guide_ID': batch['Guide_ID'],
                            'Year': batch['Year'],
                            'Department': batch['Department'],
                            'Batch': batch['Batch'],
                        })
                elif Review_No == '2':
                    stud = Review_2.objects.get(ID = batch['ID'])
                    if stud.Hod_Status == True:
                        result.append({
                            'ID': batch['ID'],
                            'Name': batch['Name'],
                            'Guide_ID': batch['Guide_ID'],
                            'Year': batch['Year'],
                            'Department': batch['Department'],
                            'Batch': batch['Batch'],
                        })
                elif Review_No == '3':
                    stud = Review_3.objects.get(ID = batch['ID'])
                    if stud.Hod_Status == True:
                        result.append({
                            'ID': batch['ID'],
                            'Name': batch['Name'],
                            'Guide_ID': batch['Guide_ID'],
                            'Year': batch['Year'],
                            'Department': batch['Department'],
                            'Batch': batch['Batch'],
                        })
            return Response({'data' : result, 'message':'successfully done'})
        else:
            return Response({'data': [ ],'message': "panel member not found"})
    else:
        return Response('Invalid Request')

@api_view(['POST'])
def update_marks(request):
    if request.method == 'POST':
        data = request.data
        print(data)
        for entry in data:
            Id = entry['id']
            Review0_Marks = entry['marks']
            Review0_Feedback = entry['remarks']
            Name = entry['name']
            Batch = entry['batch']
            Year = entry['year']
            PanalMember_ID = entry['panelmember_id']
            Review_No = entry['reviewNo']
            if Review_No == '0':
                student = Panal_Review0(ID = Id, Name = Name, Batch = Batch, Year = Year, Review0_Marks = Review0_Marks, Review0_Feedback = Review0_Feedback, PanalMember_ID = PanalMember_ID)
                try:
                    student.save()
                    student.Review0_Status = True
                    student.save()
                except Exception as e:
                    print(f"Error saving student {Id}: {str(e)}")
            if Review_No == '1':
                student = Panal_Review1(ID = Id, Name = Name, Batch = Batch, Year = Year, Review1_Marks = Review0_Marks, Review1_Feedback = Review0_Feedback, PanalMember_ID = PanalMember_ID)
                try:
                    student.save()
                    student.Review1_Status = True
                    student.save()
                except Exception as e:
                    print(f"Error saving student {Id}: {str(e)}")
            if Review_No == '2':
                student = Panal_Review2(ID = Id, Name = Name, Batch = Batch, Year = Year, Review2_Marks = Review0_Marks, Review2_Feedback = Review0_Feedback, PanalMember_ID = PanalMember_ID)
                try:
                    student.save()
                    student.Review2_Status = True
                    student.save()
                except Exception as e:
                    print(f"Error saving student {Id}: {str(e)}")
            if Review_No == '3':
                student = Panal_Review3(ID = Id, Name = Name, Batch = Batch, Year = Year, Review3_Marks = Review0_Marks, Review3_Feedback = Review0_Feedback, PanalMember_ID = PanalMember_ID)
                try:
                    student.save()
                    student.Review3_Status = True
                    student.save()
                except Exception as e:
                    print(f"Error saving student {Id}: {str(e)}")
        return Response("marks and remarks updated for review")
    else:
        return Response("Invalid request")


    
@api_view(['POST'])
def fetchreview0Marks(request):
    if request.method == 'POST':
        data=request.data
        Id=data.get('id')
        data=Student_Info.objects.get(ID=Id)
        batch=data.Batch
        year=data.Year
        
        fetch=Panal_Review0.objects.filter(Batch=batch,Year=year)
        serial=Panel_Review0_Serializer(fetch , many=True).data
        
        fetch1=Panal_Review1.objects.filter(Batch=batch,Year=year)
        serial1=Panel_Review1_Serializer(fetch1 , many=True).data
        
        fetch2=Panal_Review2.objects.filter(Batch=batch,Year=year)
        serial2=Panel_Review2_Serializer(fetch2 , many=True).data
        
        fetch3=Panal_Review3.objects.filter(Batch=batch,Year=year)
        serial3=Panel_Review3_Serializer(fetch3 , many=True).data
        
        combined_data ={
            'review0':serial,
            'review1':serial1,
            'review2':serial2,
            'review3':serial3,
        
        }
        
        return Response(combined_data)
        
        
        

      
        
        
        