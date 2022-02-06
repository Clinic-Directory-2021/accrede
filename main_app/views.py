from sys import implementation
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

from pptx import Presentation
from pptx.util import Inches

import time

import os

from io import BytesIO
from pptx.dml.color import RGBColor

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

        uploadIn = request.POST.get('uploadIn')

        fileDirectory = selectLevel+"/"+selectArea+"/"+selectParameter+"/"+selectCategory+"/"+fileName

        doc_ref = firestoreDB.collection(selectLevel+'_'+selectArea+"_"+selectParameter+"_"+selectCategory).document()
        
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
            'uploadIn': uploadIn,
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
            'uploadIn':uploadIn,
        })



        return redirect('storage_drive')

def activity_logs(request):
    if 'user_id' in request.session:
        logs = firestoreDB.collection('activity_logs_storage_drive').get()
        logs_data = []

        for log in logs:
            value = log.to_dict()
            logs_data.append(value)

        return render(request,'file_manager/activity_logs.html',{
        'logs_data': logs_data,
        })
    else:
        return redirect('/')

def recycle_bin(request):
    return render(request,'file_manager/recycle_bin.html')

#Level 1 / Area 1
def level1(request):
    return render(request,'file_manager/level1/level1.html')
def area1(request):
    return render(request,'file_manager/level1/area1/area1.html')

def level1_area1_parameterA(request):
    if 'user_id' in request.session:
        systems = firestoreDB.collection('Level 1_Area 1_Parameter A_System').get()
        implementations = firestoreDB.collection('Level 1_Area 1_Parameter A_Implementation').get()
        outcomes = firestoreDB.collection('Level 1_Area 1_Parameter A_Outcomes').get()

        powerpoints = firestoreDB.collection('generatelevel1_area1_parameterA').get()

        uploaded_data = []
        needed_data = []
        generated_data = []

        for system in systems:
            value = system.to_dict()
            uploaded_data.append(value)
            needed_data.append(value['uploadIn'])

        for implementation in implementations:
            value = implementation.to_dict()
            uploaded_data.append(value)
            needed_data.append(value['uploadIn'])

        for outcome in outcomes:
            value = outcome.to_dict()
            uploaded_data.append(value)
            needed_data.append(value['uploadIn'])

        for powerpoint in powerpoints:
            value = powerpoint.to_dict()
            generated_data.append(value)
            
        data = {
            'uploaded_data': uploaded_data,
            'needed_datas': needed_data,
            'generated_data': generated_data,
        }
        
        return render(request,'file_manager/level1/area1/parameterA/parameterA.html', data)
    else:
        return redirect('/')

#Level 1 / Area 2
def area2(request):
    return render(request,'file_manager/level1/area2/area2.html')
def level1_area2_implementation(request):
    return render(request,'file_manager/level1/area2/implementation.html')
def level1_area2_implementation_parameterA(request):
    return render(request,'file_manager/level1/area2/implementation/parameterA.html')
def level1_area2_implementation_parameterB(request):
    return render(request,'file_manager/level1/area2/implementation/parameterB.html')
def level1_area2_implementation_parameterC(request):
    return render(request,'file_manager/level1/area2/implementation/parameterC.html')
def level1_area2_implementation_parameterD(request):
    return render(request,'file_manager/level1/area2/implementation/parameterD.html')
def level1_area2_implementation_parameterE(request):
    return render(request,'file_manager/level1/area2/implementation/parameterE.html')
def level1_area2_implementation_parameterF(request):
    return render(request,'file_manager/level1/area2/implementation/parameterF.html')
def level1_area2_implementation_parameterG(request):
    return render(request,'file_manager/level1/area2/implementation/parameterG.html')
def level1_area2_implementation_parameterH(request):
    return render(request,'file_manager/level1/area2/implementation/parameterH.html')
def level1_area2_outcome(request):
    return render(request,'file_manager/level1/area2/outcome.html')
def level1_area2_outcome_parameterA(request):
    return render(request,'file_manager/level1/area2/outcome/parameterA.html')
def level1_area2_outcome_parameterB(request):
    return render(request,'file_manager/level1/area2/outcome/parameterB.html')
def level1_area2_outcome_parameterC(request):
    return render(request,'file_manager/level1/area2/outcome/parameterC.html')
def level1_area2_outcome_parameterD(request):
    return render(request,'file_manager/level1/area2/outcome/parameterD.html')
def level1_area2_outcome_parameterE(request):
    return render(request,'file_manager/level1/area2/outcome/parameterE.html')
def level1_area2_outcome_parameterF(request):
    return render(request,'file_manager/level1/area2/outcome/parameterF.html')
def level1_area2_outcome_parameterG(request):
    return render(request,'file_manager/level1/area2/outcome/parameterG.html')
def level1_area2_outcome_parameterH(request):
    return render(request,'file_manager/level1/area2/outcome/parameterH.html')
def level1_area2_system(request):
    return render(request,'file_manager/level1/area2/system.html')
def level1_area2_system_parameterA(request):
    return render(request,'file_manager/level1/area2/system/parameterA.html')
def level1_area2_system_parameterB(request):
    return render(request,'file_manager/level1/area2/system/parameterB.html')
def level1_area2_system_parameterC(request):
    return render(request,'file_manager/level1/area2/system/parameterC.html')
def level1_area2_system_parameterD(request):
    return render(request,'file_manager/level1/area2/system/parameterD.html')
def level1_area2_system_parameterE(request):
    return render(request,'file_manager/level1/area2/system/parameterE.html')
def level1_area2_system_parameterF(request):
    return render(request,'file_manager/level1/area2/system/parameterF.html')
def level1_area2_system_parameterG(request):
    return render(request,'file_manager/level1/area2/system/parameterG.html')
def level1_area2_system_parameterH(request):
    return render(request,'file_manager/level1/area2/system/parameterH.html')

#Level 1 / Area 3
def area3(request):
    return render(request,'file_manager/level1/area3/area3.html')
def level1_area3_parameterA(request):
    return render(request,'file_manager/level1/area3/parameterA.html')
def level1_area3_parameterB(request):
    return render(request,'file_manager/level1/area3/parameterB.html')
def level1_area3_parameterC(request):
    return render(request,'file_manager/level1/area3/parameterC.html')
def level1_area3_parameterD(request):
    return render(request,'file_manager/level1/area3/parameterD.html')
def level1_area3_parameterE(request):
    return render(request,'file_manager/level1/area3/parameterE.html')
def level1_area3_parameterF(request):
    return render(request,'file_manager/level1/area3/parameterF.html')

#Level 1 / Area 4
def area4(request):
    return render(request,'file_manager/level1/area4/area4.html')
def level1_area4_implementation(request):
    return render(request,'file_manager/level1/area4/implementation.html')
def level1_area4_implementation_parameterA(request):
    return render(request,'file_manager/level1/area4/implementation/parameterA.html')
def level1_area4_implementation_parameterB(request):
    return render(request,'file_manager/level1/area4/implementation/parameterB.html')
def level1_area4_implementation_parameterC(request):
    return render(request,'file_manager/level1/area4/implementation/parameterC.html')
def level1_area4_implementation_parameterD(request):
    return render(request,'file_manager/level1/area4/implementation/parameterD.html')
def level1_area4_implementation_parameterE(request):
    return render(request,'file_manager/level1/area4/implementation/parameterE.html')
def level1_area4_outcome(request):
    return render(request,'file_manager/level1/area4/outcome.html')
def level1_area4_outcome_parameterA(request):
    return render(request,'file_manager/level1/area4/outcome/parameterA.html')
def level1_area4_outcome_parameterB(request):
    return render(request,'file_manager/level1/area4/outcome/parameterB.html')
def level1_area4_outcome_parameterC(request):
    return render(request,'file_manager/level1/area4/outcome/parameterC.html')
def level1_area4_outcome_parameterD(request):
    return render(request,'file_manager/level1/area4/outcome/parameterD.html')
def level1_area4_outcome_parameterE(request):
    return render(request,'file_manager/level1/area4/outcome/parameterE.html')
def level1_area4_system(request):
    return render(request,'file_manager/level1/area4/system.html')
def level1_area4_system_parameterA(request):
    return render(request,'file_manager/level1/area4/system/parameterA.html')
def level1_area4_system_parameterB(request):
    return render(request,'file_manager/level1/area4/system/parameterB.html')
def level1_area4_system_parameterC(request):
    return render(request,'file_manager/level1/area4/system/parameterC.html')
def level1_area4_system_parameterD(request):
    return render(request,'file_manager/level1/area4/system/parameterD.html')
def level1_area4_system_parameterE(request):
    return render(request,'file_manager/level1/area4/system/parameterE.html')


#Level 1 / Area 5
def area5(request):
    return render(request,'file_manager/level1/area5/area5.html')
def level1_area5_implementation(request):
    return render(request,'file_manager/level1/area5/implementation.html')
def level1_area5_implementation_parameterA(request):
    return render(request,'file_manager/level1/area5/implementation/parameterA.html')
def level1_area5_implementation_parameterB(request):
    return render(request,'file_manager/level1/area5/implementation/parameterB.html')
def level1_area5_implementation_parameterC(request):
    return render(request,'file_manager/level1/area5/implementation/parameterC.html')
def level1_area5_implementation_parameterD(request):
    return render(request,'file_manager/level1/area5/implementation/parameterD.html')
def level1_area5_outcome(request):
    return render(request,'file_manager/level1/area5/outcome.html')
def level1_area5_outcome_parameterA(request):
    return render(request,'file_manager/level1/area5/outcome/parameterA.html')
def level1_area5_outcome_parameterB(request):
    return render(request,'file_manager/level1/area5/outcome/parameterB.html')
def level1_area5_outcome_parameterC(request):
    return render(request,'file_manager/level1/area5/outcome/parameterC.html')
def level1_area5_outcome_parameterD(request):
    return render(request,'file_manager/level1/area5/outcome/parameterD.html')
def level1_area5_system(request):
    return render(request,'file_manager/level1/area5/system.html')
def level1_area5_system_parameterA(request):
    return render(request,'file_manager/level1/area5/system/parameterA.html')
def level1_area5_system_parameterB(request):
    return render(request,'file_manager/level1/area5/system/parameterB.html')
def level1_area5_system_parameterC(request):
    return render(request,'file_manager/level1/area5/system/parameterC.html')
def level1_area5_system_parameterD(request):
    return render(request,'file_manager/level1/area5/system/parameterD.html')





def logout(request):
    try:
        del request.session['user_id']
    except:
        return redirect('/')
    return redirect('/')

def manage_accounts(request):
    if 'user_id' not in request.session:
        return redirect('/')
    else:
        if request.method == 'GET':
            department = request.GET.get('department')

            if department == 'IT':
                getCollection = firestoreDB.collection('it_department_accounts').get()

                collection_data = []

                for user in getCollection:
                    value = user.to_dict()
                    collection_data.append(value)

                data = {
                    'user_data': collection_data,
                    'department': "IT",
                }
                
                return render(request, 'manage_accounts.html', data)
            
            if department == 'HRM':
                getCollection = firestoreDB.collection('hrm_department_accounts').get()

                collection_data = []

                for user in getCollection:
                    value = user.to_dict()
                    collection_data.append(value)

                data = {
                    'user_data': collection_data,
                    'department': "HRM",
                }
                return render(request, 'manage_accounts.html', data)
            
            if department == 'TOURISM':
                getCollection = firestoreDB.collection('tourism_department_accounts').get()

                collection_data = []

                for user in getCollection:
                    value = user.to_dict()
                    collection_data.append(value)

                data = {
                    'user_data': collection_data,
                    'department': "TOURISM",
                }
                return render(request, 'manage_accounts.html', data)
            
            if department == 'EDUC':
                getCollection = firestoreDB.collection('educ_department_accounts').get()

                collection_data = []

                for user in getCollection:
                    value = user.to_dict()
                    collection_data.append(value)

                data = {
                    'user_data': collection_data,
                    'department': "EDUC",
                }
                return render(request, 'manage_accounts.html', data)

        department = request.POST.get('department')

        getCollection = firestoreDB.collection('it_department_accounts').get()

        collection_data = []

        for user in getCollection:
            value = user.to_dict()
            collection_data.append(value)

        data = {
            'user_data': collection_data,
            'department': "IT",
        }
        return render(request, 'manage_accounts.html', data)


def addAccount(request):
    if request.method == 'POST':
        access_rights = request.POST.get('access_rights')
        firstname = request.POST.get('firstname')
        middlename = request.POST.get('middlename')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        contact = request.POST.get('contact')
        address = request.POST.get('address')
        user_level = request.POST.get('user_level')
        birthdate = request.POST.get('birthdate')

        if password != confirm_password:
            return HttpResponse("Password Do Not Match!")
        else:
            try:
                #register email and password to firebase auth
                user = auth_pyrebase.create_user_with_email_and_password(email, password)

                if access_rights == 'IT':
                    doc_ref = firestoreDB.collection('it_department_accounts').document(user['localId'])
                elif access_rights == 'HRM':
                    doc_ref = firestoreDB.collection('hrm_department_accounts').document(user['localId'])
                elif access_rights == 'TOURISM':
                    doc_ref = firestoreDB.collection('tourism_department_accounts').document(user['localId'])    
                elif access_rights == 'EDUC':
                    doc_ref = firestoreDB.collection('educ_department_accounts').document(user['localId']) 
                

                doc_ref.set({
                    'user_id': doc_ref.id,
                    'firstname': firstname,
                    'middlename': middlename,
                    'lastname': lastname,
                    'email': email,
                    'contact': contact,
                    'address': address,
                    'user_level': user_level,
                    'birthdate': birthdate,
                    'access_rights': access_rights,

                })
                return HttpResponse("Success!")
            except requests.HTTPError as e:
                error_json = e.args[1]
                error = json.loads(error_json)['error']['message']
                if error == "EMAIL_EXISTS":
                    return HttpResponse('Email Already Exists!')
            


def editAccount(request):
    if request.method == 'POST':
        firstname = request.POST.get('firstname')
        middlename = request.POST.get('middlename')
        lastname = request.POST.get('lastname')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirm_password')
        contact = request.POST.get('contact')
        address = request.POST.get('address')
        user_level = request.POST.get('user_level')
        birthdate = request.POST.get('birthdate')

        user_id = request.POST.get('user_id')
        access_rights = request.POST.get('access_rights')

        if password != confirm_password:
            return HttpResponse("Password Do Not Match!")
        else:
            try:

                if access_rights == 'IT':
                    doc_ref = firestoreDB.collection('it_department_accounts').document(user_id)
                elif access_rights == 'HRM':
                    doc_ref = firestoreDB.collection('hrm_department_accounts').document(user_id)
                elif access_rights == 'TOURISM':
                    doc_ref = firestoreDB.collection('tourism_department_accounts').document(user_id)    
                elif access_rights == 'EDUC':
                    doc_ref = firestoreDB.collection('educ_department_accounts').document(user_id) 
                

                doc_ref.update({
                    'user_id': doc_ref.id,
                    'firstname': firstname,
                    'middlename': middlename,
                    'lastname': lastname,
                    'email': email,
                    'contact': contact,
                    'address': address,
                    'user_level': user_level,
                    'birthdate': birthdate,
                    'access_rights': access_rights,

                })
                return HttpResponse("Success!")
            except requests.HTTPError as e:
                error_json = e.args[1]
                error = json.loads(error_json)['error']['message']
                if error == "EMAIL_EXISTS":
                    return HttpResponse('Email Already Exists!')

def generatelevel1_area1_parameterA(request):
    if 'user_id' in request.session:
        try:
            os.remove('./ppt/test.pptx')
        except:
            print("no file found")

        systems = firestoreDB.collection('Level 1_Area 1_Parameter A_System').get()
        implementations = firestoreDB.collection('Level 1_Area 1_Parameter A_Implementation').get()
        outcomes = firestoreDB.collection('Level 1_Area 1_Parameter A_Outcomes').get()
        
        dynamic_images = []

        for system in systems:
            value = system.to_dict()
            dynamic_images.append({
                'storage_file_url': value['storage_file_url'],
                'uploadIn': value['uploadIn'],
            })

        for implementation in implementations:
            value = implementation.to_dict()
            dynamic_images.append({
                'storage_file_url': value['storage_file_url'],
                'uploadIn': value['uploadIn'],
            })

        for outcome in outcomes:
            value = outcome.to_dict()
            dynamic_images.append({
                'storage_file_url': value['storage_file_url'],
                'uploadIn': value['uploadIn'],
            })

        prs = Presentation()
        prs.slide_width = Inches(8.51)
        prs.slide_height = Inches(13.01)

        #0 = title Slide, 1 = title and content, 3 = section header, etc
        slide_layout = prs.slide_layouts[0]
        
        bulsu_img_url = "https://firebasestorage.googleapis.com/v0/b/accreditation-management.appspot.com/o/BULSU_logo.png?alt=media&token=10fc51f4-2689-468b-b7c4-e331d86540c1"
        response_bulsu = requests.get(bulsu_img_url)
        image_data_bulsu = BytesIO(response_bulsu.content)

        for images in dynamic_images:
            value = images
            slide = prs.slides.add_slide(slide_layout)

            background = slide.background
            fill = background.fill
            fill.solid()
            fill.fore_color.rgb = RGBColor(243, 241, 181)

            shapes = slide.shapes
            title_shape = shapes.title
            title_shape.top = Inches(1)
            title_shape.left = Inches(0.1)
            title_shape.width = Inches(2)
            title_shape.text = value['uploadIn']

            #distance of the top edge
            top = Inches(2.5)
            #distance of the left edge
            left = Inches(0.3)
            height = Inches(5.5)
            
            img_url = value['storage_file_url']
            response = requests.get(img_url)
            image_data = BytesIO(response.content)

            pic = slide.shapes.add_picture(image_data, left, top, height=height)
            
            bulsuLogo = slide.shapes.add_picture(image_data_bulsu, Inches(0.3), Inches(10.5), height=Inches(1.5))

        prs.save('./ppt/test.pptx')

        tz = pytz.timezone('Asia/Hong_Kong')
        now = datetime.now(tz)

        fileName = "parameterA_"+str(time.time())+".pptx"
        file_directory = "/ppt/level1/area1/parameterA/"+ fileName

        #upload image
        storage.child(file_directory).put('./ppt/test.pptx')

        doc_ref = firestoreDB.collection('generatelevel1_area1_parameterA').document()

        doc_ref.set({
            'storage_file_id': doc_ref.id,
            'storage_file_url' : storage.child(file_directory).get_url(None),
            'file_name': fileName,
            'date': now,
        })


        return redirect('/level1_area1_parameterA')
    else:
        return redirect('/')