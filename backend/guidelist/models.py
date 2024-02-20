from django.db import models

class GuideList(models.Model):
    Reg_No = models.CharField(max_length=50,unique=True)
    Name = models.CharField(max_length=100)

    def __str__(self):
        return self.Name
    
