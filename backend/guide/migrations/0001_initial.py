# Generated by Django 5.0.2 on 2024-02-22 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student_Info',
            fields=[
                ('ID', models.CharField(max_length=25, primary_key=True, serialize=False, unique=True)),
                ('Name', models.CharField(default=None, max_length=50)),
                ('Batch', models.CharField(default=None, max_length=25)),
                ('Year', models.CharField(default=None, max_length=25)),
                ('Department', models.CharField(default=None, max_length=50)),
                ('Guide_ID', models.CharField(default=None, max_length=20)),
            ],
        ),
    ]
