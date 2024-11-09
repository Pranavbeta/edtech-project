from django.urls import path
from .views import RegisterView, LoginView, UserProfileView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),  # Route for user registration
    path('login/', LoginView.as_view(), name='login'),  # Route for user login
    path('profile/', UserProfileView.as_view(), name='profile'),  # Route to get user profile
]
