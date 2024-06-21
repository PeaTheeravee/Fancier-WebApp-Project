from django.contrib import admin
from .models import ActivityCard, UserList

class DesignCardAdmin(admin.ModelAdmin):
    list_display=["name","activity_type"]
    list_per_page=10
    list_filter=["activity_type"]
    search_fields=["name"]

admin.site.register(ActivityCard,DesignCardAdmin)
admin.site.register(UserList)


