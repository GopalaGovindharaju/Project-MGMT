from django.db import models

class Panal_Review0(models.Model):
    ID = models.CharField(unique = True,primary_key = True, max_length = 50)
    Name = models.CharField(max_length = 50, null =  True)
    Batch = models.CharField(max_length = 25, null =  True)
    Year = models.CharField(max_length = 25,null =  True)
    Review0_Marks = models.IntegerField( null =  True)
    Review0_Feedback = models.CharField(max_length = 100 , null =  True)
    PanalMember_ID = models.CharField(max_length=25, null =  True,unique = True)
    Review0_Status= models.BooleanField(default = False)
    
class Panal_Review1(models.Model):
    ID = models.CharField(unique = True,primary_key = True, max_length = 50)
    Name = models.CharField(max_length = 50, null =  True)
    Batch = models.CharField(max_length = 25, null =  True)
    Year = models.CharField(max_length = 25,null =  True)
    Review1_Marks = models.IntegerField( null =  True)
    Review1_Feedback = models.CharField(max_length = 100 , null =  True)
    PanalMember_ID = models.CharField(max_length=25, null =  True,unique = True)
    Review1_Status= models.BooleanField(default = False)
    
class Panal_Review2(models.Model):
    ID = models.CharField(unique = True,primary_key = True, max_length = 50)
    Name = models.CharField(max_length = 50, null =  True)
    Batch = models.CharField(max_length = 25, null =  True)
    Year = models.CharField(max_length = 25,null =  True)
    Review2_Marks = models.IntegerField(null =  True)
    Review2_Feedback = models.CharField(max_length = 100 , null =  True)
    PanalMember_ID = models.CharField(max_length=25, null =  True,unique = True)
    Review2_Status= models.BooleanField(default = False)
    
    
class Panal_Review3(models.Model):
    ID = models.CharField(unique = True, primary_key = True, max_length = 50)
    Name = models.CharField(max_length = 50, null =  True)
    Batch = models.CharField(max_length = 25, null =  True)
    Year = models.CharField(max_length = 25,null =  True)
    Review3_Marks = models.IntegerField( null =  True)
    Review3_Feedback = models.CharField(max_length = 100 , null =  True)
    PanalMember_ID = models.CharField(max_length=25, null =  True,unique = True)
    Review3_Status= models.BooleanField(default = False)
    