from django.db import models

class ProjectStatus(models.Model):
    LeadReg_No = models.CharField(max_length=50)
    Staff_Incharge = models.CharField(max_length=100)
    Date_Of_Meeting = models.DateField()
    Work_Completed = models.CharField(max_length=250)
    Work_To_Be_Completed = models.CharField(max_length=250)
    Review = models.BooleanField(default=False)
    Row_No = models.IntegerField(default=0)
 
    def __str__(self):
        return self.LeadReg_No
    
