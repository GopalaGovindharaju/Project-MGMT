# Generated by Django 4.2.5 on 2023-11-01 14:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projectdetails', '0004_alter_project_last_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='Last_Updated',
            field=models.DateField(),
        ),
    ]
