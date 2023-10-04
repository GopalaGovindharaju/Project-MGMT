from .models import Signin
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['POST'])
def create_employee(request):
    if request.method == 'POST':
        data = request.data

        User_Name = data.get('User_Name')
        User_Id = data.get('User_Id')
        Role = data.get('Role')
        Password = data.get('Password')
        Email = data.get('Email')
        Batch_No = data.get('Batch_No')
        Role = data.get('Role')
        Year = data.get('Year')
        Staff_Incharge = data.get('Staff_Incharge')

        user_detail = Signin(
            User_Name=User_Name,
            User_ID=User_Id,
            Role=Role,
            Email=Email,
            Batch_No=Batch_No,
            Year=Year,
            Staff_Incharge=Staff_Incharge,
        )
        user_detail.set_password(Password)
        user_detail.save()
        return Response(Role)
    else:
        return Response("Can't Sign up")
    
@api_view(['POST'])
def validate_employee(request):
    if request.method == 'POST':
        data = request.data

        ExUserId = data.get('ExUserId')
        ExPassword = data.get('ExPassword')

        try:
            user = Signin.objects.get(User_ID=ExUserId)

            if user.check_password(ExPassword):
                Role = user.Role
                return Response(Role)
            else:
                return Response('ma')
        except Signin.DoesNotExist:
            return Response('fa')

