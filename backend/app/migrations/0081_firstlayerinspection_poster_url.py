# Generated by Django 4.0.10 on 2024-05-30 23:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0080_firstlayerinspection_firstlayerinspectionimage'),
    ]

    operations = [
        migrations.AddField(
            model_name='firstlayerinspection',
            name='poster_url',
            field=models.CharField(blank=True, max_length=2000, null=True),
        ),
    ]