# Generated by Django 5.0.2 on 2024-02-22 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Guide_Info',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('Name', models.CharField(default=None, max_length=50)),
                ('Designation', models.CharField(default=None, max_length=50)),
                ('Department', models.CharField(default=None, max_length=50)),
            ],
        ),
    ]
