from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import SignUp_Table
from .serializers import SignUp_TableSerializer


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
            if SignUp_Table.filter(Role = 'Admin', Department = Department).exists():
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
                return Response('User created')
        elif Role == 'Guide':
            




