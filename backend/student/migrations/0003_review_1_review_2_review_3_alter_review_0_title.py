# Generated by Django 5.0.2 on 2024-02-23 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0002_alter_review_0_abstract_alter_review_0_base_paper_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review_1',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('PPT', models.FileField(blank=True, null=True, upload_to='review_1_docs/')),
                ('Architecture', models.BooleanField(default=False)),
                ('Modules', models.BooleanField(default=False)),
                ('Modules_Description', models.BooleanField(default=False)),
                ('Litrature_survey', models.BooleanField(default=False)),
                ('Outcome_Images', models.BooleanField(default=False)),
                ('PPt_Status', models.BooleanField(default=False)),
                ('Guide_Status', models.BooleanField(default=False)),
                ('Hod_Status', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Review_2',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('Implementation_80P', models.FileField(blank=True, null=True, upload_to='review_2_docs/')),
                ('Report_RoughCopy', models.FileField(blank=True, null=True, upload_to='review_2_docs/')),
                ('PPT', models.FileField(blank=True, null=True, upload_to='review_2_docs/')),
                ('Project_Publish', models.BooleanField(default=False)),
                ('Implement_Status', models.BooleanField(default=False)),
                ('Report_Status', models.BooleanField(default=False)),
                ('PPt_Status', models.BooleanField(default=False)),
                ('Guide_Status', models.BooleanField(default=False)),
                ('Hod_Status', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Review_3',
            fields=[
                ('ID', models.CharField(max_length=50, primary_key=True, serialize=False, unique=True)),
                ('Project_Demo', models.FileField(default=None, max_length=50, upload_to='review_3_docs/')),
                ('Project_Screenshot', models.FileField(blank=True, null=True, upload_to='review_3_docs/')),
                ('Report', models.FileField(blank=True, null=True, upload_to='review_3_docs/')),
                ('PPT', models.FileField(blank=True, null=True, upload_to='review_3_docs/')),
                ('Project_Demo_Status', models.BooleanField(default=False)),
                ('Project_Screenshot_Status', models.BooleanField(default=False)),
                ('Report_Status', models.BooleanField(default=False)),
                ('PPT_Status', models.BooleanField(default=False)),
                ('Guide_Status', models.BooleanField(default=False)),
                ('Hod_Status', models.BooleanField(default=False)),
            ],
        ),
        migrations.AlterField(
            model_name='review_0',
            name='Title',
            field=models.CharField(max_length=50),
        ),
    ]
