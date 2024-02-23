# Generated by Django 5.0.2 on 2024-02-22 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SignUp_Table',
            fields=[
                ('ID', models.CharField(max_length=20, primary_key=True, serialize=False, unique=True)),
                ('Name', models.CharField(default=None, max_length=50)),
                ('Password', models.CharField(max_length=50)),
                ('Role', models.CharField(max_length=30)),
                ('Department', models.CharField(max_length=50, unique=True)),
            ],
        ),
    ]