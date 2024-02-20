from django.db import models

class Team(models.Model):
    LeadReg_No = models.CharField(max_length=50,unique=True)
    Lead = models.CharField(max_length=100)
    Staff_Incharge = models.CharField(max_length=100)
    Member1 = models.CharField(max_length=100)
    Member2 = models.CharField(max_length=100)
    Member3 = models.CharField(max_length=100)


    def __str__(self):
        return self.Lead
