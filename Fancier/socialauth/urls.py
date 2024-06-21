from django.urls import path
from .views import gglogin

urlpatterns = [
    path('gglogin/', gglogin, name='gglogin'),
]