from rest_framework import generics

from blog.models import Fragment
from blog.serializers import FragmentSerializer


class FragmentList(generics.ListCreateAPIView):
    queryset = Fragment.objects.all()
    serializer_class = FragmentSerializer


class FragmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Fragment.objects.all()
    serializer_class = FragmentSerializer
