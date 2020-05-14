from rest_framework import serializers
from preceptors.models import Preceptor

#Perceptor Serializer
class PreceptorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Preceptor
        fields = '__all__'