from rest_framework import serializers
from blog.models import Fragment


class FragmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fragment
        exclude = ['created_by', 'updated_on', 'created_on']
