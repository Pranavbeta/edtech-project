from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),       # Django admin site URL
    path('api/', include('courses.urls')),  # API URL for courses
    path('api/users/', include('user.urls')),
     path('api/chatbot/', include('chatbot.urls')),
    # You can include more apps similarly by adding them here.
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
