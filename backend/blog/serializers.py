from rest_framework import serializers
from blog.models import Fragment
from django_typomatic import ts_interface, generate_ts


@ts_interface()
class FragmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fragment
        exclude = ['title', 'created_by', 'updated_on', 'created_on']


generate_ts('../frontend/src/constants/serializers.ts')
