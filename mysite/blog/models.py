from django.db import models
from django.contrib.auth.models import User

STATUS = (
    (0, 'Draft'),
    (1, 'Published'),
    (2, 'Archived')
)

CATEGORY = (
    ('EX', 'Excerpt'),
    ('WR', 'Writing'),
    ('LY', 'Lyrics')
)


class Post(models.Model):
    # Add an image field and a category field
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blog_post')
    author = models.CharField(max_length=50)
    origin = models.CharField(max_length=100, blank=True)
    updated_on = models.DateTimeField(auto_now=True)
    content = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    category = models.IntegerField(choices=CATEGORY)
    image = models.ImageField(upload_to='images/')

    class Meta:
        ordering = ['-created_on']

        def __str__(self):
            return self.title
