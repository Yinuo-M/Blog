from rest_framework import viewsets

from blog.models import Fragment
from blog.serializers import FragmentSerializer


class FragmentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Fragment.objects.all()
    serializer_class = FragmentSerializer
