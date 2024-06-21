from itertools import product
from rest_framework import serializers
from .models import ActivityCard, UserList

class ActivityCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = ActivityCard
        fields = '__all__'

class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserList
        fields = '__all__'