# Generated by Django 4.0.3 on 2022-03-17 09:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0008_post_originally_written_on'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='originally_written_on',
            field=models.DateTimeField(null=True),
        ),
    ]