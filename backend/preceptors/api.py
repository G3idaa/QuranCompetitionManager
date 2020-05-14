from preceptors.models import Preceptor
from rest_framework import viewsets, permissions
from .serializers import PreceptorSerializer

#Perceptor ViewSet
class PreceptorViewSet(viewsets.ModelViewSet):
    queryset = Preceptor.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PreceptorSerializer