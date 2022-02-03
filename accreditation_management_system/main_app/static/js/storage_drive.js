
var levelValue;
var areaValue;
var parameterValue;
var categoryValue;
var dateValue;

setInterval(generateFilename, 1000);


function generateFilename() {

    
var level = document.getElementById("selectLevel");  
var area = document.getElementById("selectArea");
var parameter = document.getElementById("selectParameter");
var category = document.getElementById("selectCategory");
var date = document.getElementById("selectDate");

var drive_upload = $('#drive_upload')[0].files[0];

levelValue = level.value;
areaValue = area.value;
parameterValue = parameter.value;
categoryValue = category.value;
dateValue = date.value;

    try{
      $('#fileName').val(levelValue+'_'+areaValue+'_'+parameterValue+'_'+categoryValue+'_'+dateValue+'_'+Date.now()+'_'+drive_upload.name);
    }catch(e){

    }
    
  }


function dynamicFields(){
  var level = document.getElementById("selectLevel");  
  var area = document.getElementById("selectArea");
  var parameter = document.getElementById("selectParameter");
  var category = document.getElementById("selectCategory");

  levelValue = level.value;
areaValue = area.value;
parameterValue = parameter.value;
categoryValue = category.value;

 if(levelValue == 'Level 1' && areaValue == 'Area 1' && parameterValue == 'Parameter A' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The Institution/ College conducts a  review on the  statements of the  Vision and Mission  as well as its goals and program objectives for the approval of authorities concerned.</option>' +
  '<option value="I.2">I.2 The College/ Academic Unit  follows a system of  formulating its  goals and the  objectives of the program.</option>' +
  '<option value="I.3">I.3. The College/ Academic Units  faculty, personnel, students and other stakeholders (cooperating  agencies, linkages,  alumni, industry  sector and other  concerned groups) participate in the  formulation, review and/or revision of the VMGO.</option>'+
'</select>'+
'</div>';

  $(".appendedField").remove();
  $( ".appendHere" ).append( html );
 }

 else if(levelValue == 'Level 1' && areaValue == 'Area 1' && parameterValue == 'Parameter A' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The VMGO are crafted and duly approved by the BOR/BOT.</option>' +
  '</select>'+
'</div>';
 }

else if(levelValue == 'Level 1' && areaValue == 'Area 1' && parameterValue == 'Parameter A' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1 The Institution has a system of determining the Vision and Mission</option>' +
  '<option value="S.2">S.2 The Vision Clearly Reflects what the institution hopes to become in the Future</option>' +
  '<option value="S.3">S.3 The Mission reflects the Institution\'s legal and other statutory mandates</option>'+
  '<option value="S.4">S.3 The Goals of  the College/  Academic Units are  consistent with the  Mission of the  Institution.</option>'+
  '<option value="S.5.1">S.5.1 Technical Skills</option>'+
  '<option value="S.5.2">S.5.2 Research and Extension Capabilities</option>'+
  '<option value="S.5.3">S.5.3 Students\' own  ideas, desirable  attitudes and  personal discipline</option>'+
  '<option value="S.5.4">S.5.4 Moral  character</option>'+
  '<option value="S.5.5">S.5.5 Critical, analytical, problem solving, and other higher order thinking skills</option>'+
  '<option value="S.5.6">S.5.6 aesthetic and  cultural values</option>'+
'</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 1' && parameterValue == 'Parameter B' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The VMGO are  available on  bulletin boards, in  catalogs/manuals  and in other forms  of communication  media.</option>' +
'</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 1' && parameterValue == 'Parameter B' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. A system of  dissemination and  acceptability of  the VMGO is  enforced.</option>' +
  '<option value="I.2.1">I.2.1. Vision and  Mission of the Institution;</option>' +
  '<option value="I.2.2">I.2.2. Goals of the College/ Academic Unit; and</option>' +
  '<option value="I.2.3">I.2.3. Objectives of the Program</option>' +
  '<option value="I.3.1">I.3.1. Administrators</option>' +
  '<option value="I.3.2">I.3.2. Faculty</option>' +
  '<option value="I.3.3">I.3.3. Staff</option>' +
  '<option value="I.3.4">I.3.4. Students; and</option>' +
  '<option value="I.3.5">I.3.5. Other. stakeholders</option>' +
  '<option value="I.4">I.4. The Faculty and Staff Perform Their jobs/functions in consonance with the VMGO.</option>' +
  '<option value="I.5">I.5. The VMGO are widely disseminated to the different agencies, institutions, industry sector and the community</option>' +
'</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 1' && parameterValue == 'Parameter B' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. There is full  awareness and  acceptance of the  VMGO by the  administrators,  faculty, staff,  students and  other  stakeholders.</option>' +
  '<option value="O.2.1">O.2.1 Vision and Mission of the SUC/s</option>' +
  '<option value="O.2.3">O.2.3. Objectives of the Program</option>' +
  '<option value="O.3">O.3. The goals and Objectives are being Achieved</option>' +
  '</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter A' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. Instruction</option>' +
  '<option value="I.1.2">I.1.2. Research</option>' +
  '<option value="I.1.3">I.1.3. Extension</option>' +
  '<option value="I.1.4">I.1.4. Production</option>' +
  '<option value="I.1.5">I.1.5. Consultancy and Expert Service</option>' +
  '<option value="I.1.6">I.1.6. Publication Creative and Scholarly Works</option>' +
  '<option value="I.2">I.2. Faculty pursue graduate degrees related to the program and/or allied fields from reputable institutions (with at least Level II Accreditation Status or World/ Asian Rank</option>' +
  '</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter A' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The institution has qualified and competent faculty</option>' +
  '</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter A' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The required number of faculty possess graduate degrees appropriate and relevant to the program or any of the allied fields.</option>' +
  '<option value="S.2.1">S.2.1. related professional experience</option>' +
  '<option value="S.2.2">S.2.2. Licensure (if Applicable)</option>' +
  '<option value="S.2.3">S.2.3. Specialization</option>' +
  '<option value="S.2.4">S.2.4. Technical/Pedagogical Skills And Competence</option>' +
  '<option value="S.2.5">S.2.5. Special abilities, computer literacy, research productivity</option>' +
  '<option value="S.3">S.3. Faculty handling OJT/ practicum courses have at least three (3) years of teaching and industry - based  experience in the field, if applicable.</option>' +
  '<option value="S.4">S.4 At least 50% of the faculty are Graduate Degree holders</option>' +
'</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter B' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. Academic Qualification</option>' +
  '<option value="I.1.2">I.1.2. Personal Qualities</option>' +
  '<option value="I.1.3">I.1.3. Communications Skills</option>' +
  '<option value="I.1.4">I.1.4. Teaching Ability</option>' +
  '<option value="I.1.5">I.1.5. Medical Examination Results</option>' +
  '<option value="I.1.6">I.1.6. psychological examination result</option>' +
  '<option value="I.1.7">I.1.7. relevant/ professional experiences</option>' +
  '<option value="I.1.8">I.1.8. previous record of employment</option>' +
  '<option value="I.1.9">I.1.9. Technical/ special skills & abilities</option>' +
  '<option value="I.1.10">I.1.10. previous performance rating</option>' +
  '<option value="I.2.1">I.2.1. Print media (newspaper, flyers, CSC Bulletin of Vacant Positions)</option>' +
  '<option value="I.2.2">I.2.2. Broadcast  media (TV, Radio)</option>' +
  '<option value="I.2.3">I.2.3. Websites</option>' +
  '<option value="I.2.4">I.2.4. Bulletin Boards</option>' +
  '<option value="I.2.5">I.2.5. Others </option>' +
  '<option value="I.3">I.3. A Screening  Committee selects  and recommends  the best and most qualified  applicants.</option>' +
  '<option value="I.4">I.4. Measures to avoid professional in-breeding are observed</option>' +
  '<option value="I.5">I.5. The institution conducts orientation for newly-hire faculty  on its institutional  vision and mission; CSC, PRC, DBM, and administration  policies on their duties,  responsibilities,  benefits and other  academic concerns</option>' +
  '</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter B' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The most  qualified faculty are selected</option>' +
  '</select>'+
'</div>';
}

else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter B' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is an institutional Human Resource Development Plan/ Program designed for faculty recruitment.</option>' +
'</div>';
}

// AREA 2 PARAMETER C 
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter C' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The maximum total load is  assigned to  regular full-time faculty in  accordance to the CMO of the  program and  institutional  guidelines</option>' +
  '<option value="I.2">I.2. A Faculty  Manual is  published  formalizing  faculty policies,  standards and  guidelines</option>' +
  '<option value="I.3">I.3. Professional  subjects are  handled by specialists in the discipline/ program</option>' +
  '<option value="I.4">I.4. The faculty  are assigned to  teach their major/  minor fields of  specialization, for a maximum of  four (4) different subject preparations within a semester</option>' +
  '<option value="I.5">I.5. Administrative arrangements are adopted when vacancies/leaves of  absence occur  during the term</option>' +
  '<option value="I.6">I.6. No less than 60% of the  professional  subjects offered  in the program  are handled by  full-time faculty.</option>' +
  '<option value="I.7">I.7. Teaching schedule does not allow more than six (6) hours of continuous teaching</option>' +
  '<option value="I.8">I.8. Administrative, research and/or  professional assignment outside of regular teaching are given credits</option>' +
  '<option value="I.9">I.9. Consultation,  tutorial, remedial  classes, expert  services and other instruction -  related activities  are given credits in consonance with  faculty workload guidelines</option>' +
  '<option value="I.10">I.10. Workload assignments  and number of  preparations follow existing workload guidelines</option>' +
  '</select>'+
'</div>';
}


  $(".appendedField").remove();
  $( ".appendHere" ).append( html );
 }




