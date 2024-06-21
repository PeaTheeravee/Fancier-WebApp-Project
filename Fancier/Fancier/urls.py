from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from activities.views import ActivityCardView
from socialauth.auth import SocialAuthorizationView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

route = routers.DefaultRouter()
route.register('activities', ActivityCardView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('scauth/', include('socialauth.urls')),
    path('auth/', include('auth.urls')),
    path('api/', include('activities.urls')),
    path('api2/token/', SocialAuthorizationView.as_view(), name='token_obtain_pair'),
    path('api2/token/refresh/',TokenRefreshView.as_view(), name='token_refresh'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
