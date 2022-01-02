from django.shortcuts import render, redirect
from django.http import HttpResponse

import requests
import json

import pyrebase

import firebase_admin
from firebase_admin import auth
from firebase_admin import credentials
from firebase_admin import firestore

# import html to pdf converter
from django.template.loader import get_template
from xhtml2pdf import pisa
from django.contrib.staticfiles import finders
from io import BytesIO
from django.core.files import File
from django.conf import settings

import pytz
from datetime import datetime

config = {
  'apiKey': "AIzaSyAh_oOakDenknpcWt5oucsLODSDiheWxps",
  'authDomain': "accreditation-management.firebaseapp.com",
  'projectId': "accreditation-management",
  'databaseURL': "https://accreditation-management-default-rtdb.firebaseio.com/",
  'storageBucket': "accreditation-management.appspot.com",
  'messagingSenderId': "553200895776",
  'appId': "1:553200895776:web:66ec853d3450869e4b3945"
}

firebase = pyrebase.initialize_app(config)
cred = credentials.Certificate("main_app/serviceAccountKey.json")
firebase_admin.initialize_app(cred)

auth_pyrebase = firebase.auth()

firestoreDB = firestore.client()

storage = firebase.storage()

# Create your views here.
def login(request):
    if 'user_id' in request.session:
        return redirect('/homepage')
    else:
        return render(request,'login.html')
    

def login_validation(request):
    if request.method == 'POST':
        try:
            email = request.POST.get('login_email')
            password = request.POST.get('login_password')

            user = auth_pyrebase.sign_in_with_email_and_password(email, password)

            request.session['user_id'] = user['localId']

            request.session['user_email'] = email

            return HttpResponse('Success!')
        except:
            return HttpResponse('Invalid Email or Password!')    

def homepage(request):
    return render(request, 'homepage.html')

def storage_drive(request):
    return render(request, 'file_manager/storage_drive.html')

def upload_storage_drive(request):
    if request.method == 'POST':
        drive_upload =  request.FILES['drive_upload']

        selectLevel = request.POST.get('selectLevel')
        selectArea = request.POST.get('selectArea')
        selectParameter = request.POST.get('selectParameter')
        selectCategory = request.POST.get('selectCategory')
        selectDate = request.POST.get('selectDate')
        fileName = request.POST.get('fileName')

        fileDirectory = selectLevel+"/"+selectArea+"/"+selectParameter+"/"+selectCategory+"/"+fileName

        doc_ref = firestoreDB.collection('storage_drive').document()
        
        #upload to firebase storage
        storage.child(fileDirectory).put(drive_upload)

        doc_ref.set({
            'storage_file_id': doc_ref.id,
            'storage_file_url' : storage.child(fileDirectory).get_url(None),
            'level': selectLevel,
            'area': selectArea,
            'parameter': selectParameter,
            'category': selectCategory,
            'date': selectDate,
            'file_name': fileName,
        })

        tz = pytz.timezone('Asia/Hong_Kong')
        philippines_current_datetime = datetime.now(tz)

        doc_ref2 = firestoreDB.collection('activity_logs_storage_drive').document()

        doc_ref2.set({
            'activity_log_id': doc_ref2.id,
            'user_email': request.session['user_email'],
            'user_id': request.session['user_id'],
            'info': "uploaded " + fileName,
            'date': philippines_current_datetime,
        })



        return redirect('storage_drive')

def activity_logs(request):
    return render(request,'file_manager/activity_logs.html')

def recycle_bin(request):
    return render(request,'file_manager/recycle_bin.html')

def area(request):
    return render(request,'file_manager/area.html')
def generate_template(request):
    return render(request,'file_manager/generate_template.html')

def logout(request):
    try:
        del request.session['user_id']
    except:
        return redirect('/')
    return redirect('/')
