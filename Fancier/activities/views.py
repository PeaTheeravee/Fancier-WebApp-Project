from re import A
from django.shortcuts import render
from rest_framework import viewsets
from .models import ActivityCard, UserList
from .serializers import ActivityCardSerializer, UserListSerializer

class ActivityCardView(viewsets.ModelViewSet):
    queryset = ActivityCard.objects.all().order_by('id')
    serializer_class = ActivityCardSerializer

class UserListView(viewsets.ModelViewSet):
    queryset = UserList.objects.all()
    serializer_class = UserListSerializer

