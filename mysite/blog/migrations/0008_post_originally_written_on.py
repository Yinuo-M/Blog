# Generated by Django 4.0.3 on 2022-03-17 09:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0007_alter_post_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='originally_written_on',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
