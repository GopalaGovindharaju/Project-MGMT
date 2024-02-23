from django.db import models

class Guide_Info(models.Model):
    ID = models.CharField(primary_key = True, unique = True, max_length = 50)
    Name = models.CharField(max_length = 50, default = None)
    Designation = models.CharField(max_length = 50, default = None)
    Department = models.CharField(max_length = 50, default = None)
    PanelMember=models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.ID} {self.Name} {self.Department}"
    
    
    
    

  