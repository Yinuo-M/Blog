from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog import views

router = DefaultRouter()
router.register(r'fragments', views.FragmentViewSet, basename='fragments')

urlpatterns = [
    path('', include(router.urls)),
]
