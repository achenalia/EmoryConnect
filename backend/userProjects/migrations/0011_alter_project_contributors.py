# Generated by Django 4.2.2 on 2024-04-24 23:57

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('userProjects', '0010_project_contributors'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='contributors',
            field=models.ManyToManyField(blank=True, related_name='contributed_projects', to=settings.AUTH_USER_MODEL),
        ),
    ]
