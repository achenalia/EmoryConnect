# Generated by Django 4.2.10 on 2024-03-26 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userProjects', '0003_userprofile'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='bio',
            field=models.TextField(blank=True, null=True),
        ),
    ]
