
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

// AREA 2 PARAMETER C IMPLEMENTATION
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

// AREA 2 PARAMETER C OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter C' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The faculty  are efficient and  effective, with  sufficient time for instruction,  research,  extension,  production and  other assigned tasks</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER C System
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter C' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is an institutional Human Resource Development Plan/ Program designed for faculty recruitment.</option>' +
'</div>';
}


// AREA 2 PARAMETER D IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter D' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The institution  implements the system of promotion in rank  and salary based on existing  policies and  issuances (e.g. NBC 461)</option>' +
  '<option value="I.2">I.2. Retirement, separation or  termination  benefits are  implemented in accordance with institutional and  government  (CSC, GSIS/DBM) policies and  guidelines</option>' +
  '<option value="I.3">I.3. The faculty are officially informed of  their rank and tenure after evaluation of the credentials and performance</option>' +
  '<option value="I.4">I.4. The faculty  concerned is  officially informed  of the extension renewal, or  termination of  their appointments</option>' +
  '<option value="I.5">I.5. The institution  implements a CSC - approved Strategic Performance  Management System (SPMS) which emphasizes quality teaching performance, research, creative work, extension, production services</option>' +
  '<option value="I.6">I.6. The probationary  period or temporary  status required  before the grant of  permanent status to the faculty in  accordance with Civil Service and institutional policies and guidelines</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER D OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter D' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The faculty are satisfied with their rank and appointment status</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER D System
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter D' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution has a system of promotion in rank and tenure based on official issuance</option>' +
  '<option value="S.2">S.2. The institution has a policy on probationary status of employment</option>' +
  '<option value="S.3">S.3. At least 50%  of the full - time  faculty teaching  the professional  courses under permanent/ regular status</option>' +
'</div>';
}


// AREA 2 PARAMETER E IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter E' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. upgraded educational qualifications (graduate  studies)</option>' +
  '<option value="I.1.2">I.1.2. attendance to seminars,  symposia and  conferences for continuing education</option>' +
  '<option value="I.1.3">I.1.3. conduct of research activities and publication of research output</option>' +
  '<option value="I.1.4">I.1.4. giving lectures and  presentation of papers in  national/ international  conferences, symposia and seminars</option>' +
  '<option value="I.2">I.2. The institution supports the  professional  growth of the  faculty through  attendance in  educational  lectures, symposia, seminars, conferences and  other forms of training</option>' +
  '<option value="I.3">I.3. The institution conducts in-  service training  activities regularly  at least once per term</option>' +
  '<option value="I.4">I.4. Selection of deserving  faculty to be granted  scholarship,  fellowships, seminars, conferences and/or training grants is done objectively</option>' +
  '<option value="I.5">I.5. The budget for faculty development is  adequately  allowed</option>' +
  '<option value="I.6">I.6. The budget for faculty development is wisely utilized</option>' +
  '<option value="I.7.1">I.7.1. adequate  and qualified  supervision of faculty</option>' +
  '<option value="I.7.2">I.7.2. scholarships, sabbatical leaves and research grants</option>' +
  '<option value="I.7.3">I.7.3. financial  support for active  membership in  professional organizations</option>' +
  '<option value="I.7.4">I.7.4. deloading to finish the faculty\'s thesis/dissertation</option>' +
  '<option value="I.7.5">I.7.5. attendance in continuing professional education(CPE)  programs such as seminars, workshops and conferences or  some in-service training courses</option>' +
  '<option value="I.7.6">I.7.6. conducting research activities related to the program</option>' +
  '<option value="I.7.7">I.7.7. publishing scholarly articles  and research outputs</option>' +
  '<option value="I.7.8">I.7.8. production of instructional  materials (IMs)</option>' +
  '<option value="I.8">I.8. Opportunities  for the faculty to  attend/participate in  capability-building  and enhancing  activities are fairly distributed</option>' +
  '<option value="I.9">I.9. Tuition fee  privilege and other forms of assistance  are utilized for  faculty pursuing  advanced (master\'s and/or doctoral) degrees</option>' +
  '<option value="I.10">I.10. Faculty are  given incentives  for book writing, manuals,  handbooks,  compilations and  instructional materials to keep up with new knowledge and techniques in the field of specialization</option>' +
  '</select>'+
'</div>';
}


// AREA 2 PARAMETER E OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter E' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The faculty are  well-trained and competent to serve the institution</option>' +
  '<option value="O.2">O.2. The faculty are committed to  serve and support the programs and projects of the institution</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER E System
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter E' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution  has an approved  and sustainable Faculty Development Program (FDP)</option>' +
  '<option value="S.2">S.2. There are  policies on faculty academic  recognition and grant of scholarships/ fellowships and awards</option>' +
  '<option value="S.3">S.3. Every faculty member has at  least one active  membership in  professional/ scientific  organization or honor society relevant to his/her assignment and field of specialization</option>' +
  '<option value="S.4">S.4. The budget allocation for faculty  development is adequate</option>' +
'</div>';
}

// AREA 2 PARAMETER F IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter F' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. knowledge of the program objectives/ outcome(s)</option>' +
  '<option value="I.1.2">I.1.2. reflecting the  program outcomes clearly in the  course objectives</option>' +
  '<option value="I.1.3">I.1.3. knowlege/  mastery of the  content, issues and  methodologies in the discipline</option>' +
  '<option value="I.1.4">I.1.4. proficiency in the use of the language instruction</option>' +
  '<option value="I.1.5">I.1.5. the use of of  higher order  thinking skills  such as analytical, critical, creative, innovative and problem solving</option>' +
  '<option value="I.1.6">I.1.6. innovativeness and resourcefulness in the different instructional process</option>' +
  '<option value="I.1.7">I.1.7. integration of  values and work  ethics in the  teaching learning process</option>' +
  '<option value="I.1.8">I.1.8. integration of Gender and  Development (GAD) activities</option>' +
  '<option value="I.2">I.2. promptly submit required reports and other academic outputs</option>' +
  '<option value="I.3">I.3. update lecture notes through an interface of  relevant research  finding and new knowledge</option>' +
  '<option value="I.4">I.4. serve as resource person/ lecturer/ consultant in the program/field of specialization</option>' +
  '<option value="I.5">I.5. presents papers in local, regional/ national and/or international fora</option>' +
  '<option value="I.7">I.7. conducts  research and public outputs in refereed journals of national and international circulation</option>' +
  '<option value="I.8">I.8. conduct extension and outreach  activities</option>' +
  '<option value="I.9">I.9. regularly update respective course syllabi</option>' +
  '<option value="I.10">I.10. utilize ICT and other  resources in the enhancement of the teaching and learning process</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER F OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter F' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The faculty performance is generally satisfactory</option>' +
  '<option value="O.2">O.2 The scholarly works of the faculty are commendable</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER F System
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter F' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1.1">S.1.1. professional  performance</option>' +
  '<option value="S.1.2">S.1.2. scholarly works</option>' +
'</div>';
}

// AREA 2 PARAMETER G IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter G' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. maternity leave/paternity leave with pay</option>' +
  '<option value="I.1.2">I.1.2. sick leave</option>' +
  '<option value="I.1.3">I.1.3. study leave (with or without pay)</option>' +
  '<option value="I.1.4">I.1.4. vacation leave</option>' +
  '<option value="I.1.5">I.1.5. tuition fee discount for faculty and their dependents</option>' +
  '<option value="I.1.6">I.1.6. clothing/ uniform allowance</option>' +
  '<option value="I.1.7">I.1.7. performance based bonus (PBB)</option>' +
  '<option value="I.1.8">I.1.8. anniversary bonus</option>' +
  '<option value="I.1.9">I.1.9. honoraria/ incentives for conducting research or for the production of scholarly works</option>' +
  '<option value="I.1.10">I.1.10. housing privilege (optional)</option>' +
  '<option value="I.1.11">I.1.11. sabbatical leave</option>' +
  '<option value="I.1.12">I.1.12. compensatory leave credit</option>' +
  '<option value="I.1.13">I.1.13. deloading to finish thesis/ dissertation</option>' +
  '<option value="I.1.14">I.1.14. thesis/ dissertation aid</option>' +
  '<option value="I.1.15">I.1.15. others (please specify)</option>' +
  '<option value="I.2">I.2. Policies on salaries/benefits and other  privileges are  disseminated to the faculty</option>' +
  '<option value="I.3">I.3. Salaries are  paid regularly and promptly</option>' +
  '<option value="I.4">I.4. Teaching assignments beyond the regular load are compensated (e.g. overload pay, service credits, etc.)</option>' +
  '<option value="I.5">I.5. Faculty who are actually involved in the  production of scholarly materials are given credits for their works</option>' +
  '<option value="I.6">I.6. Faculty with outstanding performance are given recognition/ awards and  incentives</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER G OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter G' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The faculty are satisfied with their compensation and rewards.</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER G System
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter G' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution has a system of compensation and rewards to its faculty and staff</option>' +
'</div>';
}

// AREA 2 PARAMETER H IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter H' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. regular and prompt attendance in classes</option>' +
  '<option value="I.1.2">I.1.2. participation in faculty meetings and university/college activities</option>' +
  '<option value="I.1.3">I.1.3. completion of assigned tasks on time</option>' +
  '<option value="I.1.4">I.1.4. submission of all required reports promptly</option>' +
  '<option value="I.1.5">I.1.5. decorum at all times</option>' +
  '<option value="I.2">I.2. Follow the Code of Ethics of  the Profession and the Code of Ethical Standards for Government Officials and Employees (RA 6713)</option>' +
  '<option value="I.3">I.3. exercise academic freedom judiciously</option>' +
  '<option value="I.4.1">I.4.1 observance of official time</option>' +
  '<option value="I.4.3">I.4.3. performance of other tasks and assignments, with or without compensation</option>' +
  '<option value="I.4.4">I.4.4. compliance  with terms of agreement/ contracts (e.g., scholarship and training)</option>' +
  '<option value="I.5">I.5. maintain harmonious interpersonal relations with superiors, peers, students, parents, and the community</option>' +
  '<option value="I.6">I.6. demonstrate knowledge of recent educational trends/ issues/resources in the program under survey</option>' +
  '<option value="I.7">I.7. show evidence  of professional growth through further and  continuing studies.</option>' +
  '<option value="I.8">I.8. engage in  practices which  enable faculty to  demonstrate  harmonious  interpersonal  relations with students, faculty and the  community</option>' +
  '</select>'+
'</div>';
}

// AREA 2 PARAMETER H OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter H' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The corps of the faculty  manifests a commendable level of professionalism.</option>' +
  '</select>'+
'</div>';
}


// AREA 2 PARAMETER H System
else if(levelValue == 'Level 1' && areaValue == 'Area 2' && parameterValue == 'Parameter H' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There are  approved SUC Code and SUC Faculty  Manual that defines the policies,  guidelines, rules  and regulations affecting the faculty.</option>' +
'</div>';
}

  $(".appendedField").remove();
  $( ".appendHere" ).append( html );
 }




