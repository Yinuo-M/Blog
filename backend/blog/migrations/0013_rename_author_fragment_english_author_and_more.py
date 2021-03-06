# Generated by Django 4.0.3 on 2022-06-05 21:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0012_remove_fragment_content_fragment_chinese_content_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='fragment',
            old_name='author',
            new_name='english_author',
        ),
        migrations.RemoveField(
            model_name='fragment',
            name='slug',
        ),
        migrations.AddField(
            model_name='fragment',
            name='chinese_author',
            field=models.CharField(default='作者', max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='fragment',
            name='image_alt',
            field=models.CharField(default='name', max_length=50),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='fragment',
            name='chinese_content',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='english_content',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='fragment',
            name='title',
            field=models.CharField(max_length=50),
        ),
    ]
