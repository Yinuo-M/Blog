# Generated by Django 4.0.3 on 2022-03-10 15:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_alter_post_created_by'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='created_by',
        ),
    ]