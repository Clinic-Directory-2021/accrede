"""accreditation_management_system URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name = "login"),
    path('homepage/', views.homepage, name = "homepage"),
    path('storage_drive/', views.storage_drive, name = "storage_drive"),
    path('activity_logs/', views.activity_logs, name = "activity_logs"),
    path('recycle_bin/', views.recycle_bin, name = "recycle_bin"),

    #Area and Parameters
    ## Level 1 / Area 1
    path('level1/', views.level1, name="level1"),
    path('level1/area1/', views.area1, name = "level1/area1"),
    path('level1/area1/parameterA', views.parameterA, name = "level1/area1/parameterA"),
    
    ## Level 1/ Area 2
    path('level1/area2/', views.area1, name = "level1/area2"),
    path('level1/area2/parameterA', views.parameterA, name = "level1/area2/parameterA"),





    path('login_validation/', views.login_validation, name="login_validation"),
    path('manage_accounts/', views.manage_accounts, name="manage_accounts"),
    path('logout/', views.logout, name="logout"),

    path('upload_storage_drive/', views.upload_storage_drive, name="upload_storage_drive"),

    path('addAccount/', views.addAccount, name="addAccount"),

    path('editAccount/', views.editAccount, name="editAccount"),
    
    
]
