from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import SignUp_Table
from .serializers import SignUp_TableSerializer
from administrator.models import Guide_Info
from guide.models import Student_Info
from student.models import Review_0


@api_view(['POST'])
def create_user(request):
    if request.method == 'POST':
        data = request.data

        Id = data.get('id')
        Name = data.get('name')
        Password = data.get('password')
        Role = data.get('role')
        Department = data.get('department')

        if Role == 'Admin':
            if SignUp_Table.objects.filter(Role = 'Admin', Department = Department).exists():
                return Response({'error':'Admin Already Exists'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user_data = SignUp_Table(
                    ID = Id,
                    Name = Name,
                    Role = Role,
                    Department = Department,
                )
                user_data.set_password(Password)
                user_data.save()
                return Response("Admin Created")
        elif Role == 'Guide':
            if Guide_Info.objects.filter(ID = Id).exists():
                user_data = SignUp_Table(
                    ID = Id,
                    Name = Name,
                    Role = Role,
                )
                user_data.set_password(Password)
                user_data.save()
                return Response('Guide Created')
            else:
                return Response("Please Contact Admin!")
        elif Role == 'Student':
            if Student_Info.objects.filter(ID = Id, Name = Name).exists():
                user_data = SignUp_Table(
                    ID = Id,
                    Name = Name,
                    Role = Role,
                )
                user_data.set_password(Password)
                user_data.save()
                review_0_data = Review_0(
                    ID = Id,
                )
                review_0_data.save()
                return Response('Student Created')
            else:
                return Response("You Are Yet To Be Added By Your Guide!")
    else:
        return Response("Can't Sign'Up")







