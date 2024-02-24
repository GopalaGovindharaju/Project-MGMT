from django.db import models
from django.contrib.auth.hashers import make_password, check_password

class SignUp_Table(models.Model):
    ID = models.CharField(primary_key=True, max_length = 20, unique = True)
    Name = models.CharField(max_length = 50, default = None)
    Password = models.CharField(max_length = 50)
    Role = models.CharField(max_length = 30)
    Department = models.CharField(max_length = 50, unique = True, null = True)

    def __str__(self):
        return f"{self.ID} {self.Name} {self.Department}"
    
    def set_password(self, raw_password):
        self.Password = make_password(raw_password)
    
    def check_password(self, raw_password):
        return check_password(raw_password, self.Password)
    


