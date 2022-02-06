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
    path('level1/area1/parameterA', views.level1_area1_parameterA, name = "level1/area1/parameterA"),
    
    ## Level 1/ Area 2
    path('level1/area2/', views.area2, name = "level1/area2"),
    path('level1/area2/implementation', views.level1_area2_implementation, name = "level1/area2/implementation"),
    path('level1/area2/implementation/parameterA', views.level1_area2_implementation_parameterA, name = "level1/area2/implementation/parameterA"),
    path('level1/area2/implementation/parameterB', views.level1_area2_implementation_parameterB, name = "level1/area2/implementation/parameterB"),
    path('level1/area2/implementation/parameterC', views.level1_area2_implementation_parameterC, name = "level1/area2/implementation/parameterC"),
    path('level1/area2/implementation/parameterD', views.level1_area2_implementation_parameterD, name = "level1/area2/implementation/parameterD"),
    path('level1/area2/implementation/parameterE', views.level1_area2_implementation_parameterE, name = "level1/area2/implementation/parameterE"),
    path('level1/area2/implementation/parameterF', views.level1_area2_implementation_parameterF, name = "level1/area2/implementation/parameterF"),
    path('level1/area2/implementation/parameterG', views.level1_area2_implementation_parameterG, name = "level1/area2/implementation/parameterG"),
    path('level1/area2/implementation/parameterH', views.level1_area2_implementation_parameterH, name = "level1/area2/implementation/parameterH"),
    path('level1/area2/outcome', views.level1_area2_outcome, name = "level1/area2/outcome"),
    path('level1/area2/outcome/parameterA', views.level1_area2_outcome_parameterA, name = "level1/area2/outcome/parameterA"),
    path('level1/area2/outcome/parameterB', views.level1_area2_outcome_parameterB, name = "level1/area2/outcome/parameterB"),
    path('level1/area2/outcome/parameterC', views.level1_area2_outcome_parameterC, name = "level1/area2/outcome/parameterC"),
    path('level1/area2/outcome/parameterD', views.level1_area2_outcome_parameterD, name = "level1/area2/outcome/parameterD"),
    path('level1/area2/outcome/parameterE', views.level1_area2_outcome_parameterE, name = "level1/area2/outcome/parameterE"),
    path('level1/area2/outcome/parameterF', views.level1_area2_outcome_parameterF, name = "level1/area2/outcome/parameterF"),
    path('level1/area2/outcome/parameterG', views.level1_area2_outcome_parameterG, name = "level1/area2/outcome/parameterG"),
    path('level1/area2/outcome/parameterH', views.level1_area2_outcome_parameterH, name = "level1/area2/outcome/parameterH"),
    path('level1/area2/system', views.level1_area2_system, name = "level1/area2/system"),
    path('level1/area2/system/parameterA', views.level1_area2_system_parameterA, name = "level1/area2/system/parameterA"),
    path('level1/area2/system/parameterB', views.level1_area2_system_parameterB, name = "level1/area2/system/parameterB"),
    path('level1/area2/system/parameterC', views.level1_area2_system_parameterC, name = "level1/area2/system/parameterC"),
    path('level1/area2/system/parameterD', views.level1_area2_system_parameterD, name = "level1/area2/system/parameterD"),
    path('level1/area2/system/parameterE', views.level1_area2_system_parameterE, name = "level1/area2/system/parameterE"),
    path('level1/area2/system/parameterF', views.level1_area2_system_parameterF, name = "level1/area2/system/parameterF"),
    path('level1/area2/system/parameterG', views.level1_area2_system_parameterG, name = "level1/area2/system/parameterG"),
    path('level1/area2/system/parameterH', views.level1_area2_system_parameterH, name = "level1/area2/system/parameterH"),





    path('login_validation/', views.login_validation, name="login_validation"),
    path('manage_accounts/', views.manage_accounts, name="manage_accounts"),
    path('logout/', views.logout, name="logout"),

    path('upload_storage_drive/', views.upload_storage_drive, name="upload_storage_drive"),

    path('addAccount/', views.addAccount, name="addAccount"),

    path('editAccount/', views.editAccount, name="editAccount"),
    

    # generate PPT
    path('generatelevel1_area1_parameterA/', views.generatelevel1_area1_parameterA, name="generatelevel1_area1_parameterA"),
    
    
]
