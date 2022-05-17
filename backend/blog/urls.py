from django.urls import path
from blog import views

urlpatterns = [
    path('fragments/', views.FragmentList.as_view()),
    path('fragments/<int:pk>', views.FragmentDetail.as_view()),
]
