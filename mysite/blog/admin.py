from django.contrib import admin
from blog.models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'author',
                    'slug', 'status', 'originally_written_on')
    list_filter = ('status', 'category')
    search_fields = ['title', 'content', 'author']
    prepopulated_fields = {'slug': ("title",)}
    date_hierarchy = 'originally_written_on'


admin.site.register(Post, PostAdmin)
