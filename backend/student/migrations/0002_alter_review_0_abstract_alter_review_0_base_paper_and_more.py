# Generated by Django 5.0.2 on 2024-02-23 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review_0',
            name='Abstract',
            field=models.FileField(blank=True, null=True, upload_to='review_0_docs/'),
        ),
        migrations.AlterField(
            model_name='review_0',
            name='Base_Paper',
            field=models.FileField(blank=True, null=True, upload_to='review_0_docs/'),
        ),
        migrations.AlterField(
            model_name='review_0',
            name='PPT',
            field=models.FileField(blank=True, null=True, upload_to='review_0_docs/'),
        ),
    ]
