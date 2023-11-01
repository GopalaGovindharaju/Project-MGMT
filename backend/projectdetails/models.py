from django.db import models

class Project(models.Model):
    Batch_No = models.CharField(max_length=50)
    Project_Guide = models.CharField(max_length=100)
    Title = models.CharField(max_length=150)
    lead_RegNo = models.CharField(max_length=50,unique=True)
    Last_Updated = models.DateField()
    Review = models.IntegerField(default=0)

    def __str__(self):
        return self.Batch_No



