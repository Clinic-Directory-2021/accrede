from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request,'login.html')

def homepage(request):
    return render(request, 'homepage.html')

def storage_drive(request):
    return render(request, 'file_manager/storage_drive.html')

def activity_logs(request):
    return render(request,'file_manager/activity_logs.html')

def recycle_bin(request):
    return render(request,'file_manager/recycle_bin.html')