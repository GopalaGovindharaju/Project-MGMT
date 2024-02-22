from django.db import models

class Student_Info(models.model):
  ID = models.CharField(primary_key=True, max_length = 25, unique = True)
  Name = models.CharField(max_length = 50, default = None)
  Batch = models.CharField(max_length = 25, default = None)
  Year = models.CharField(max_length = 25,default = None)
  Department = models.CharField(max_length = 50 , default = None)
  Guide_ID = models.CharField(max_length=20 , default = None)

     def __str__(self):
        return f"{self.ID} {self.Name} {self.Batch}"