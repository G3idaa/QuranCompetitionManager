from rest_framework import routers
from .api import PreceptorViewSet

router = routers.DefaultRouter()
router.register('api/preceptors', PreceptorViewSet, 'preceptors')

urlpatterns = router.urls