from django.db import models
from django.contrib.auth.models import User

STATUS = (
    ('DR', 'Draft'),
    ('PU', 'Published'),
    ('AR', 'Archived')
)

CATEGORY = (
    ('EX', 'Excerpt'),
    ('WR', 'Writing'),
)

LANGUAGE = (
    ('EN', 'English'),
    ('CH', 'Chinese'),
    ('BO', 'Both')
)


class Fragment(models.Model):
    # Add an image field and a category field
    title = models.CharField(max_length=50)
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='fragment')
    chinese_author = models.CharField(max_length=50)
    english_author = models.CharField(max_length=50)
    origin = models.CharField(max_length=100, blank=True)
    updated_on = models.DateTimeField(auto_now=True)
    english_content = models.TextField(blank=True)
    chinese_content = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    originally_written_on = models.DateTimeField(null=True)
    status = models.CharField(choices=STATUS, max_length=2, default='DR')
    category = models.CharField(choices=CATEGORY, max_length=2, default='WR')
    language = models.CharField(choices=LANGUAGE, max_length=2, default='CH')
    image = models.ImageField(upload_to='images/', blank=True)
    image_alt = models.CharField(max_length=50)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-originally_written_on']
