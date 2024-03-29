# Generated by Django 5.0.2 on 2024-02-23 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0003_review_1_review_2_review_3_alter_review_0_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='review_1',
            name='Architecture_Status',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='review_1',
            name='Litrature_survey_Status',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='review_1',
            name='Modules_Description_Status',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='review_1',
            name='Modules_Status',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='review_1',
            name='Outcome_Images_Status',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='review_1',
            name='Architecture',
            field=models.FileField(blank=True, null=True, upload_to='review_1_docs/'),
        ),
        migrations.AlterField(
            model_name='review_1',
            name='Litrature_survey',
            field=models.FileField(blank=True, null=True, upload_to='review_1_docs'),
        ),
        migrations.AlterField(
            model_name='review_1',
            name='Modules',
            field=models.FileField(blank=True, null=True, upload_to='review_1_docs/'),
        ),
        migrations.AlterField(
            model_name='review_1',
            name='Modules_Description',
            field=models.FileField(blank=True, null=True, upload_to='review_1_docs'),
        ),
        migrations.AlterField(
            model_name='review_1',
            name='Outcome_Images',
            field=models.FileField(blank=True, null=True, upload_to='review_1_docs'),
        ),
    ]
