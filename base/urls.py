from django.urls import path
from base.views import *

urlpatterns = [
	#path('', views.home, name="home"),
	path('', 
    IndexView.as_view(),
    name="home"),


	path('about.html/',views.about,name="about"),
	path('contact.html/',views.contact,name="contact"),
	path('blog.html/',views.blog,name="blog"),
	path('event.html/',views.events,name="events"),
	path('event/<slug:slug>/',views.event, name="event"),
	path('team.html/',views.teams,name="teams"),
	
	path('latestevents',views.latestevents,name="latestevents"),
	path('posts', views.posts, name="posts"),
	path('post/<slug:slug>/', views.post, name="post"),
	path('profile/', views.profile, name="profile"),

	#CRUD PATHS

	path('create_post/', views.createPost, name="create_post"),
	path('update_post/<slug:slug>/', views.updatePost, name="update_post"),
	path('delete_post/<slug:slug>/', views.deletePost, name="delete_post"),


	path('send_email/', views.sendEmail, name="send_email"),

	path('login/', views.loginPage, name="login"),
	path('register/', views.registerPage, name="register"),
	path('logout/', views.logoutUser, name="logout"),

	path('account/', views.userAccount, name="account"),
	path('update_profile/', views.updateProfile, name="update_profile"),
]