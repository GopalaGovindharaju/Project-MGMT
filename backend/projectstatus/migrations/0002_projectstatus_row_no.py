# Generated by Django 4.2.5 on 2023-10-30 13:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectstatus', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectstatus',
            name='Row_No',
            field=models.IntegerField(default=0),
        ),
    ]
