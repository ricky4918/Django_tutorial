from django.contrib import admin
from django.urls import path
from basic_app import views
from django.conf.urls import include


app_name = 'basic_app'

urlpatterns = [
    
    path('', views.SchoolListView.as_view(), name = 'list'),
    path('create/', views.SchoolCreateView.as_view(), name = 'create'),
    path('<int:pk>/', views.SchoolDetailsView.as_view(), name = 'detail'),
    path('update/<int:pk>/', views.SchoolUpdateView.as_view(), name = 'update'),
    path('delete/<int:pk>/', views.SchoolDeleteView.as_view(), name = 'delete'),
    
]