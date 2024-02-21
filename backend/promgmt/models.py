from django.db import models
from django.contrib.auth.hashers import make_password, check_password
from django.core.validators import validate_email

class Signin(models.Model):
    User_ID = models.CharField(max_length=100,unique=True)
    User_Name = models.CharField(max_length=100)
    Password = models.CharField(max_length=100)
    Email = models.EmailField(validators=[validate_email])
    Batch_No = models.CharField(max_length=10)
    Staff_Incharge = models.CharField(max_length=50)
    Role = models.CharField(max_length=50)
    Year = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.User_Name} {self.User_ID}"
    
    def set_password(self, raw_password):
        self.Password = make_password(raw_password)

    def check_password(self, raw_password):
        return check_password(raw_password, self.Password)


