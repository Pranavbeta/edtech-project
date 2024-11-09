from rest_framework import viewsets
from .models import Course
from .serializers import CourseSerializer

class CourseViewSet(viewsets.ModelViewSet):
    serializer_class = CourseSerializer

    def get_queryset(self):
        queryset = Course.objects.all().order_by('-created_at')
        limit = self.request.query_params.get('limit', None)  # Get the 'limit' parameter from the request
        if limit is not None:
            queryset = queryset[:int(limit)]  # Limit the queryset if the 'limit' parameter is provided
        return queryset