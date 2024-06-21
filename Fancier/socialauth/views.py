from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import UserSerializer

@api_view()
def gglogin(request):
    s = UserSerializer(request.user)
    return Response(s.data)

