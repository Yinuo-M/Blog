from rest_framework import generics

from blog.models import Post
from blog.serializers import PostSerializer


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objets.all()
    serializer_class = PostSerializer
