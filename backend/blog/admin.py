from django.contrib import admin
from blog.models import Fragment


class FragmentAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'english_author',
                    'status', 'originally_written_on')
    list_filter = ('status', 'category', 'language')
    search_fields = ['title', 'english_content', 'chinese_content', 'english_author', 'chinese_author', 'origin']
    date_hierarchy = 'originally_written_on'


admin.site.register(Fragment, FragmentAdmin)
