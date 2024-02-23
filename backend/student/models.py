from django.db import models

class Review_0(models.Model):
    ID = models.CharField(primary_key = True, unique = True, max_length = 50)
    Title = models.CharField(max_length = 50, default = None)
    Abstract = models.FileField(upload_to='review_0_docs/', null = True, blank = True)
    Base_Paper = models.FileField(upload_to='review_0_docs/', null = True, blank = True)
    PPT = models.FileField(upload_to='review_0_docs/', null = True, blank = True)
    Title_Status = models.BooleanField(default=False)
    Abstract_Status = models.BooleanField(default=False)
    Base_Paper_Status = models.BooleanField(default=False)
    PPt_Status = models.BooleanField(default=False)
    Guide_Status = models.BooleanField(default=False)
    Hod_Status = models.BooleanField(default=False)

    def __str__(self):
        return self.ID

class Review_3(models.Model):
    ID = models.CharField(primary_key = True, unique = True, max_length = 50)
    Project_Demo = models.FileField(upload_to='review_3_docs/',max_length = 50, default = None)
    Project_Screenshot = models.FileField(upload_to='review_3_docs/', null = True, blank = True)
    Report = models.FileField(upload_to='review_3_docs/', null = True, blank = True)
    PPT = models.FileField(upload_to='review_3_docs/', null = True, blank = True)
    Project_Demo_Status = models.BooleanField(default=False)
    Project_Screenshot_Status = models.BooleanField(default=False)
class Review_2(models.Model):
    ID = models.CharField(primary_key = True, unique = True, max_length = 50)
    Implementation_80P = models.FileField(upload_to='review_2_docs/', null = True, blank = True)
    Report_RoughCopy = models.FileField(upload_to='review_2_docs/', null = True, blank = True)
    PPT = models.FileField(upload_to='review_2_docs/', null = True, blank = True)
    Project_Publish = models.BooleanField(default=False)
    Implement_Status = models.BooleanField(default=False)
    Report_Status = models.BooleanField(default=False)
    PPt_Status = models.BooleanField(default=False)
    Guide_Status = models.BooleanField(default=False)
    Hod_Status = models.BooleanField(default=False)

    def __str__(self):
        return self.ID

        return self.ID
