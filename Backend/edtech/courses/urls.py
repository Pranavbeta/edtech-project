from .views import CourseViewSet
from rest_framework.routers import DefaultRouter

# Create a router and register the viewset with it
router = DefaultRouter()
router.register(r'courses', CourseViewSet, basename='course')

# Include the router.urls in urlpatterns
urlpatterns = router.urls
