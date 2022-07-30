from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoomView, UserInRoom

urlpatterns = [
    path('room/', RoomView.as_view()),
    path('create-room/',CreateRoomView.as_view()),
    path('get-room/', GetRoom.as_view()),
    path('join-room/', JoinRoomView.as_view()),
    path('user-in-room/', UserInRoom.as_view()),
]