from django.urls import path
from . import views

urlpatterns = [
    path('', views.HabitListAPIView.as_view(), name='habit_list'),
    path('<int:id>/', views.HabitRetrieveAPIView.as_view(), name='habit_detail'),
    path('create/', views.HabitCreateAPIView.as_view(), name='habit_create'),
    path('update/<int:id>/', views.HabitRetrieveUpdateAPIView.as_view(), name='habit_update'),
    path('delete/<int:id>', views.HabitDeleteAPIView.as_view(), name='habit_delete'),
    ]
