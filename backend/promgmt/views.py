from .models import Signin
from rest_framework.response import Response
from rest_framework.decorators import api_view
from promgmt.serializers import SigninSerializer
from guidelist.models import GuideList
from studentlist.models import StudentList
from projectdetails.models import Project
from rest_framework import status

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
        Year = data.get('Year')
        Staff_Incharge = data.get('Staff_Incharge')

        if Role == 'admin':
            # Check if an admin already exists
            if Signin.objects.filter(Role='admin').exists():
                return Response({'error': 'Admin already exists'}, status=status.HTTP_400_BAD_REQUEST)

        if(Role != 'admin'):
            if(Role == 'staff'):
                if not GuideList.objects.filter(Reg_No=User_Id).exists():
                    return Response('')
            if(Role == 'student'):
                if not StudentList.objects.filter(Reg_No=User_Id).exists():
                    return Response('')

        user_detail = Signin(
            User_Name=User_Name,
            User_ID=User_Id,
            Role=Role,
            Email=Email,
            Batch_No=Batch_No,
            Year=Year,
            Staff_Incharge=Staff_Incharge,
        )
        user_info = {'User_Id' :User_Id, 'Role' : Role, 'Name' : User_Name, 'Email' : Email, 'Batch_No' : Batch_No, 'Staff_Incharge' : Staff_Incharge, 'Year' : Year}
        user_detail.set_password(Password)
        user_detail.save()
        if(Role == 'student'):
            project_instance = Project.objects.get(lead_RegNo=User_Id)
            project_instance.Batch_No = Batch_No
            project_instance.save()
        return Response(user_info)
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
                Name = user.User_Name
                Email = user.Email
                Batch_no = user.Batch_No
                Staff_incharge = user.Staff_Incharge
                Year = user.Year
                User_Id = user.User_ID
                if(Role == 'student'):
                    project_instance = Project.objects.get(lead_RegNo=User_Id)
                    project_instance.Batch_No = Batch_no
                    project_instance.save()
                user_info = {'User_Id' :User_Id, 'Role' : Role, 'Name' : Name, 'Email' : Email, 'Batch_No' : Batch_no, 'Staff_Incharge' : Staff_incharge, 'Year' : Year}
                return Response(user_info)
            else:
                return Response('ma')
        except Signin.DoesNotExist:
            return Response('')

@api_view(['GET'])
def student_profile(request):
    data = Signin.objects.all()
    serial = SigninSerializer(data,many=True)
    return Response(serial.data)


