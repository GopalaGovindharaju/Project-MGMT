# Generated by Django 5.0.2 on 2024-02-29 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Panal_Review0',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('Name', models.CharField(default=None, max_length=50)),
                ('Batch', models.CharField(default=None, max_length=25)),
                ('Year', models.CharField(default=None, max_length=25)),
                ('Review0_Marks', models.IntegerField(default=None, max_length=25)),
                ('Review0_Feedback', models.CharField(default=None, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Panal_Review1',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('Name', models.CharField(default=None, max_length=50)),
                ('Batch', models.CharField(default=None, max_length=25)),
                ('Year', models.CharField(default=None, max_length=25)),
                ('Review1_Marks', models.IntegerField(default=None, max_length=25)),
                ('Review1_Feedback', models.CharField(default=None, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Panal_Review2',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('Name', models.CharField(default=None, max_length=50)),
                ('Batch', models.CharField(default=None, max_length=25)),
                ('Year', models.CharField(default=None, max_length=25)),
                ('Review2_Marks', models.IntegerField(default=None, max_length=25)),
                ('Review2_Feedback', models.CharField(default=None, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Panal_Review3',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('Name', models.CharField(default=None, max_length=50)),
                ('Batch', models.CharField(default=None, max_length=25)),
                ('Year', models.CharField(default=None, max_length=25)),
                ('Review3_Marks', models.IntegerField(default=None, max_length=25)),
                ('Review3_Feedback', models.CharField(default=None, max_length=100)),
            ],
        ),
    ]
