from django.db import models

class StudentList(models.Model):
    Reg_No = models.CharField(max_length=50,unique=True)
    Project_Title = models.CharField(max_length=250, default='')

    def __str__(self):
        return self.Reg_No
    
