# Generated by Django 4.2.5 on 2023-11-01 12:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projectdetails', '0002_project_review'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='Review_0',
        ),
        migrations.RemoveField(
            model_name='project',
            name='Review_1',
        ),
        migrations.RemoveField(
            model_name='project',
            name='Review_2',
        ),
        migrations.RemoveField(
            model_name='project',
            name='Review_3',
        ),
    ]
