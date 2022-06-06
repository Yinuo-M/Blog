from rest_framework import viewsets
from blog.models import Fragment, STATUS
from blog.serializers import FragmentSerializer


class FragmentViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Fragment.objects.filter(status="PU")
    serializer_class = FragmentSerializer
