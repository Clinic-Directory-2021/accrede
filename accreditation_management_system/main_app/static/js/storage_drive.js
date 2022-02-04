
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
  '</select>'+
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
  '</select>'+
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
  '</select>'+
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
  '</select>'+
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
  '</select>'+
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
  '</select>'+
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
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER A System
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter A' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The curriculum provides for the development of the following professional competencies:</option>' +
  '<option value="S.1.1">S.1.1. acquisition of knowledge and theories based on the field of specialization/discipline;</option>' +
  '<option value="S.1.2">S.1.2. application of the theories to real problems in the field;</option>' +
  '<option value="S.1.3">S.1.3. demonstration of skills in applying different strategies in the actual work setting.</option>' +
  '<option value="S.2">S.2. There is a system of validation of subjects taken from other schools.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER A IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter A' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The curriculum/program of study meets the requirements and standards of CHED.</option>' +
  '<option value="I.2">I.2. The subjects are logically sequenced and prerequisite courses are identified.</option>' +
  '<option value="I.3">I.3. The curricular content is responsive to the needs of the country and recent development in the profession.</option>' +
  '<option value="I.4">I.4. The curricular content covers the extent of the professional and technical preparation required of its graduates.</option>' +
  '<option value="I.5">I.5. The curriculum integrates values, reflective of national customs, culture and tradition in cases where applicable.</option>' +
  '<option value="I.6">I.6. Opportunities for participation in hands-on activities, such as immersion/practical training and field study are maintained in the curriculum.</option>' +
  '<option value="I.7.1.1">I.7.1.1. administration;</option>' +
  '<option value="I.7.1.2">I.7.1.2. faculty;</option>' +
  '<option value="I.7.1.3">I.7.1.3. students;</option>' +
  '<option value="I.7.1.4">I.7.1.4. alumni;</option>' +
  '<option value="I.7.1.5">I.7.1.5. representatives from the industry/sector;</option>' +
  '<option value="I.7.1.6">I.7.1.6. others (please specify)</option>' +
  '<option value="I.7.2">I.7.2. periodic view, assessment, updating and approval of the curriculum by the Academic Council;</option>' +
  '<option value="I.7.3">I.7.3. confirmation of the curriculum by the Board of Regents/Trustees (BOR/BOT).</option>' +
  '<option value="I.7.4">I.7.4. others (please specify).</option>' +
  '<option value="I.8">I.8. The program of study allows the accommodation of students with special needs and assists them to finish the degree.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER A OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter A' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The curriculum is responsive and relevant to the demands of the times.</option>' +
  '<option value="O.2">O.2. There is a passing average performance in the Licensure Examination (if applicable).</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER B System
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter B' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is an institutional outcomes-based standard format in the preparation of course syllabi.</option>' +
  '<option value="S.2">S.2. The syllabus includes a list of suggested readings and references of print and electronic resources within the last ten (10) years.</option>' +
  '<option value="S.3">S.3. Copies of all course syllabi during the term are available at the Dean\'s office or in any other appropriate repository.</option>' +
  '<option value="S.4">S.4. Copies of all course syllabi in previous terms are filed for reference purposes.</option>' +
  '<option value="S.5">S.5. There is provision for remedial measures to strengthen the basic skills in Mathematics, English, and other “tool” subjects.</option>' +
  '<option value="S.6">S.6. There is a mechanism to facilitate the teaching-learning process.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER B IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter B' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The Dean or official concerned approves the updated syllabus for each subject.</option>' +
  '<option value="I.2">I.2. The faculty prepares syllabi with comprehensive contents.</option>' +
  '<option value="I.3">I.3. The faculty revise and enhances the syllabi preferably every two (2) years and as needed.</option>' +
  '<option value="I.4">I.4. The faculty distributes a copy of the syllabus to each student.</option>' +
  '<option value="I.5">I.5. Teaching strategies stimulate the development of the students\' higher-order thinking skills (HOTS) such as critical thinking, analytical thinking, creative thinking and problem solving.</option>' +
  '<option value="I.6.1">I.6.1. symposia, seminars, workshops, professional lectures;</option>' +
  '<option value="I.6.2">I.6.2. educational tours/learning visits/other co- curricular activities;</option>' +
  '<option value="I.6.3">I.6.3. peer teaching/cooperative learning; and</option>' +
  '<option value="I.6.4">I.6.4. computer-assisted instruction (CAI) and computer-assisted learning (CAL).</option>' +
  '<option value="I.7.1">I.7.1. group/individual projects;</option>' +
  '<option value="I.7.2">I.7.2. group/individual reports;</option>' +
  '<option value="I.7.3">I.7.3. group/individual term papers;</option>' +
  '<option value="I.7.4">I.7.4. performance activities;</option>' +
  '<option value="I.7.5">I.7.5. learning contact;</option>' +
  '<option value="I.7.6">I.7.6. portfolio;</option>' +
  '<option value="I.7.7">I.7.7. research study;</option>' +
  '<option value="I.7.8">I.7.8. learning modules; and</option>' +
  '<option value="I.7.9">I.7.9. others (please specify)</option>' +
  '<option value="I.8.1">I.8.1. film showing;</option>' +
  '<option value="I.8.2">I.8.2. projects;</option>' +
  '<option value="I.8.3">I.8.3. group dynamics;</option>' +
  '<option value="I.8.4">I.8.4. case study;</option>' +
  '<option value="I.8.5">I.8.5. workshops;</option>' +
  '<option value="I.8.6">I.8.6. simulations;</option>' +
  '<option value="I.8.7">I.8.7. dimensional question approach;</option>' +
  '<option value="I.8.8">I.8.8. brainstorming;</option>' +
  '<option value="I.8.9">I.8.9. buzz sessions;</option>' +
  '<option value="I.8.10">I.8.10. informal creative groups;</option>' +
  '<option value="I.8.11">I.8.11. interactive learning;</option>' +
  '<option value="I.8.12">I.8.12. team teaching;</option>' +
  '<option value="I.8.13">I.8.13. micro teaching;</option>' +
  '<option value="I.8.14">I.8.14. macro teaching;</option>' +
  '<option value="I.8.15">I.8.15. tandem teaching;</option>' +
  '<option value="I.8.16">I.8.16. peer teaching;</option>' +
  '<option value="I.8.17">I.8.17. multi-media/courseware/teach ware;</option>' +
  '<option value="I.8.18">I.8.18. experiments;</option>' +
  '<option value="I.8.19">I.8.19. problem-solving;</option>' +
  '<option value="I.8.20">I.8.20. type study methods;</option>' +
  '<option value="I.8.21">I.8.21. reporting;</option>' +
  '<option value="I.8.22">I.8.22. panel discussion; and</option>' +
  '<option value="I.8.23">I.8.23. others (please specify)</option>' +
  '<option value="I.9">I.9. Instructional strategies provide for student individual needs and the development of multiple intelligence;</option>' +
  '<option value="I.10.1">I.10.1. submission of approved and updated syllabus for every subject/course;</option>' +
  '<option value="I.10.2">I.10.2. regular classroom observation/supervision;</option>' +
  '<option value="I.10.3">I.10.3. regular faculty meetings with the College/Academic Dean/Department Chair;</option>' +
  '<option value="I.10.4">I.10.4. regular faculty performance evaluation;</option>' +
  '<option value="I.10.5">I.10.5. attendance/participation of faculty in in- service training;</option>' +
  '<option value="I.10.6">I.10.6. conduct of experimental classes.</option>' +
  '<option value="I.10.7">I.10.7. adoption of alternative instructional delivery modes such as modules, e-learning and online study.</option>' +
  '<option value="I.11">I.11. Instructional materials (IMs) are reviewed and recommended by an Instructional Materials Committee (IMC).</option>' +
  '<option value="I.12">I.12. Varied, multi-sensory materials and computer programs are utilized.</option>' +
  '<option value="I.13">I.13. The College/Academic Unit maintains consortia and linkages with other learning institutions for academic exchange of instructional material.</option>' +
  '<option value="I.14">I.14. The faculty are encouraged to produce their own instructional materials such as modules, software, visual aids, manuals and textbooks.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER B OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter B' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Course syllabi are updated and approved by concerned authorities.</option>' +
  '<option value="O.2">O.2. Varied teaching strategies are efficiently and effectively used.</option>' +
  '<option value="O.3">O.3. Instructional Materials produced by the faculty are copyrighted/patented.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER C System
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter C' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1.1">S.1.1. formative tests such as quizzes, unit tests;</option>' +
  '<option value="S.1.2">S.1.2. summative tests such as mid-term and final examinations;</option>' +
  '<option value="S.1.3">S.1.3. project and term papers;</option>' +
  '<option value="S.1.4">S.1.4. practicum and performance tests;</option>' +
  '<option value="S.1.5">S.1.5. other course requirements.</option>' +
  '<option value="S.2.1">S.2.1. comprehensive enough to test the different levels of cognitive skills and knowledge of content</option>' +
  '<option value="S.2.2">S.2.2. based on well-designed Table of Specifications (TOS).</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER C IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter C' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. portfolio;</option>' +
  '<option value="I.1.2">I.1.2. rubric assessment;</option>' +
  '<option value="I.1.3">I.1.3. skills demonstration;</option>' +
  '<option value="I.1.4">I.1.4. paper and pencil tests;</option>' +
  '<option value="I.1.5">I.1.5. oral examinations;</option>' +
  '<option value="I.1.6">I.1.6. group/individual reports</option>' +
  '<option value="I.1.7">I.1.7. groups/individual projects;</option>' +
  '<option value="I.1.8">I.1.8. others (please specify)</option>' +
  '<option value="I.2">I.2. Evaluation tools/instruments are reviewed and revised periodically.</option>' +
  '<option value="I.3">I.3. The faculty are trained how to assess student performance properly.</option>' +
  '<option value="I.4">I.4. The College/Academic Unit encourages and supports assessment for multiple intelligences.</option>' +
  '<option value="I.5">I.5. Course and test requirements are returned to students after results are checked, recorded and analyzed.</option>' +
  '<option value="I.6.1">I.6.1. students;</option>' +
  '<option value="I.6.2">I.6.2. faculty;</option>' +
  '<option value="I.6.3">I.6.3. academic administrators</option>' +
  '<option value="I.6.4">I.6.4. parents/guardians.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER C OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter C' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The student\'s academic performance is commendable</option>' +
  '<option value="O.2">O.2. Retention rate of students is on the average.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER D System
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter D' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1.1">S.1.1. student\'s attendance in class and other academic activities;</option>' +
  '<option value="S.1.2">S.1.2. schedule of classes;</option>' +
  '<option value="S.1.3">S.1.3. student\'s discipline;</option>' +
  '<option value="S.1.4">S.1.4. maintenance of cleanliness and orderliness.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER D IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter D' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The policies on management of learning are enforced.;</option>' +
  '<option value="I.2">I.2. Student activities are well-planned and implemented.</option>' +
  '<option value="I.3">I.3. assignments are designed to reinforced teaching which result in student\'s maximum learning.</option>' +
  '<option value="I.4">I.4. The maximum class size of 50 for undergraduate courses enforced.</option>' +
  '<option value="I.5">I.5. Classroom discipline is maintained in accordance with democratic practices.</option>' +
  '<option value="I.6">I.6. The class officers and assigned students assists in maintaining cleanliness of classroom, laboratories, corridors and the school campus.</option>' +
  '<option value="I.7.1">I.7.1. case studies/reports;</option>' +
  '<option value="I.7.2">I.7.2. thesis;</option>' +
  '<option value="I.7.3">I.7.3. others (please specify)</option>' +
  '<option value="I.8">I.8. In practicum courses (field study, OJT, practice teaching, etc.) the number of trainees supervised by each coordinator does not exceed to 50.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER D OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter D' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Learning is efficiently and effectively managed.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER E System
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter E' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is a policy on graduation requirements.</option>' +
  '</select>'+
'</div>';
}


// AREA 3 PARAMETER E IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter E' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The students are regularly informed of the academic requirements of their respective courses.</option>' +
  '<option value="I.2">I.2. The College/Academic Unit implements the system for student returnees and transferees to meet the residence and other graduation requirements.</option>' +
  '<option value="I.3">I.3. Graduating students conduct research and/or undergo practicum/OJT or other activities prescribed in their respective curricula.</option>' +
  '<option value="I.4">I.4. The College/Academic Unit assist the graduating students with academic deficiencies, disciplinary cases, and other problems which hinder issuance of clearances.</option>' +
  '<option value="I.5">I.5. A clearance from academic and financial accountabilities and responsibilities is required before graduation.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER E OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter E' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. At least 60% of the students enrolled in the program are able to graduate within the regular time frame.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER F System
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter F' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution has policies on:</option>' +
  '<option value="S.1.1">S.1.1. substitution or special arrangements whenever a faculty is on leave or absent;</option>' +
  '<option value="S.1.2">S.1.2. giving awards and/or recognition for faculty and students with outstanding achievements;</option>' +
  '<option value="S.1.3">S.1.3. supervision/monitoring and evaluation of faculty performance.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER F IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter F' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The institution implements rules on the attendance of the faculty in their respective classes and other academic related activities.</option>' +
  '<option value="I.2.1">I.2.1. faculty;</option>' +
  '<option value="I.2.2">I.2.2. students</option>' +
  '<option value="I.3.1">I.3.1. conducting seminars/workshop on syllabi making;</option>' +
  '<option value="I.3.2">I.3.2. holding workshops on test construction and the corresponding table of specifications;</option>' +
  '<option value="I.3.3">I.3.3. Conducting of competencies assessment;</option>' +
  '<option value="I.3.4">I.3.4. conducting supervisory visit of classes and providing assistance if necessary;</option>' +
  '<option value="I.3.5">I.3.5. holding of regular faculty meetings;</option>' +
  '<option value="I.3.6">I.3.6. requiring consultations between students and faculty;</option>' +
  '<option value="I.3.7">I.3.7. conducting studies on academic performance of students</option>' +
  '<option value="I.3.8">I.3.8. providing opportunities for the participation of the faculty in in-service training activities.</option>' +
  '<option value="I.4.1">I.4.1. the Dean/Academic Head/Department Chair;</option>' +
  '<option value="I.4.2">I.4.2. the students;</option>' +
  '<option value="I.4.3">I.4.3. the faculty member himself/herself;</option>' +
  '<option value="I.4.4">I.4.4. peers;</option>' +
  '<option value="I.4.5">I.4.5. others (please specify)</option>' +
  '<option value="I.5">I.5. The results of the performance evaluation are used to improve the performance/competencies of the faculty.</option>' +
  '<option value="I.6">I.6. Students are given recognition for exemplary academic and non-academic performances.</option>' +
  '<option value="I.7">I.7. Outstanding achievement of students is recognized and encouraged through the following:</option>' +
  '<option value="I.7.1">I.7.1. inclusion in the honor roll, Dean\'s list, etc.;</option>' +
  '<option value="I.7.2">I.7.2. grant of tuition scholarships;</option>' +
  '<option value="I.7.3">I.7.3. award of honor medals and merit certificate;</option>' +
  '<option value="I.7.4">I.7.4. membership in honor societies/honor class/sections, etc.; </option>' +
  '<option value="I.7.5">I.7.5. grant of special privileges such as opportunities for leadership and others (excluding exemption for major exams on all professional business subjects);</option>' +
  '<option value="I.7.6">I.7.6. grant of awards and recognition for outstanding academic accomplishments, e.g., Best Thesis, Student Researcher of the Year, etc.</option>' +
  '<option value="I.8.1">I.8.1. analysis of performance of graduates in the Licensure Examination; if applicable</option>' +
  '<option value="I.8.2">I.8.2. Employability of graduates;</option>' +
  '<option value="I.8.3">I.8.3. feedback from employers regarding performance of graduates.</option>' +
  '</select>'+
'</div>';
}

// AREA 3 PARAMETER F OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter F' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The faculty and students have commendable performance as a result of administrative support.</option>' +
  '<option value="O.2">O.2. The graduates of the program are employable.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER A IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter A' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The objectives of the SAS are disseminated to and understood by the students, faculty, staff and administrators.</option>' +
  '<option value="I.2">I.2. The SAS plans, implements, monitors and coordinates programs and services for student welfare and development.</option>' +
  '<option value="I.3">I.3. Prompt, courteous and efficient services in the handling of business transactions with students are evident.</option>' +
  '<option value="I.4">I.4. The SAS staffs receive salaries on time.</option>' +
  '<option value="I.5">I.5. The SAS is represented in the policy and decision - making body of the institution.</option>' +
  '<option value="I.6">I.6. The projects and activities of the SAS Unit are recognized and implemented.</option>' +
  '<option value="I.7">I.7. There is a continuous and systematic evaluation of the effectiveness of the programs and services for student welfare and development.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER A OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter A' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The students are satisfied with the Student Services Program</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER A System
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter A' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution has Student Services Program (SSP).</option>' +
  '<option value="S.2">S.2. The Student Affairs Services (SAS) program is consistent with the vision and mission of the Institution, goals of the College/Academic Unit and objectives of the Program.</option>' +
  '<option value="S.3">S.3. The objectives of the SAS are clearly defined.</option>' +
  '<option value="S.4">S.4. The objectives of the SAS are in accordance with CMO No. 9 series of 2013.</option>' +
  '<option value="S.5.1">S.5.1. student welfare programs;</option>' +
  '<option value="S.5.2">S.5.2. student development programs and services;</option>' +
  '<option value="S.6.1">S.6.1. Student Welfare;</option>' +
  '<option value="S.6.1.1">S.6.1.1. Information and Orientation Services;</option>' +
  '<option value="S.6.1.2">S.6.1.2. Guidance and Counseling Services;</option>' +
  '<option value="S.6.1.3">S.6.1.3. Career and Job Placement Services;</option>' +
  '<option value="S.6.1.4">S.6.1.4. Economic Enterprise Development;</option>' +
  '<option value="S.6.1.5">S.6.1.5. Student Handbook Development.</option>' +
  '<option value="S.6.2.1">S.6.2.1. Student Activities;</option>' +
  '<option value="S.6.2.2">S.6.2.2. Student Organizations and Activities;</option>' +
  '<option value="S.6.2.3">S.6.2.3. Leadership Training ;</option>' +
  '<option value="S.6.2.4">S.6.2.4. Student Council/Government;</option>' +
  '<option value="S.6.2.5">S.6.2.5. Student Discipline;</option>' +
  '<option value="S.6.2.6">S.6.2.6. Student Publication/Yearbook.</option>' +
  '<option value="S.6.3.1">S.6.3.1. Admission Services;</option>' +
  '<option value="S.6.3.2">S.6.3.2. Scholarships and Financial Assistance (SFA);</option>' +
  '<option value="S.6.3.3">S.6.3.3. Food Services;</option>' +
  '<option value="S.6.3.4">S.6.3.4. Health and Wellness Services;</option>' +
  '<option value="S.6.3.5">S.6.3.5. Safety and Security Services;</option>' +
  '<option value="S.6.3.6">S.6.3.6. Student Housing and Residential Services;</option>' +
  '<option value="S.6.3.7">S.6.3.7. Multi-faith and Inter-faith Services;</option>' +
  '<option value="S.6.3.8">S.6.3.8. Foreign/ International Students Services (whenever applicable);</option>' +
  '<option value="S.6.3.9">S.6.3.9. Services for students with Special Needs;</option>' +
  '<option value="S.6.3.10">S.6.3.10. Culture and Arts Programs;</option>' +
  '<option value="S.6.3.11">S.6.3.11. Sports and Development Programs;</option>' +
  '<option value="S.6.3.12">S.6.3.12. Social and Community Involvement Programs;</option>' +
  '<option value="S.6.3.13">S.6.3.13. others (please specify)</option>' +
  '<option value="S.7">S.7. There is a SAS Unit that manages student affairs development and welfare programs.</option>' +
  '<option value="S.8">S.8. The SAS Unit has an organizational structure indicating its relationship with other units.</option>' +
  '<option value="S.9">S.9. The SAS Unit is headed by a qualified official.</option>' +
  '<option value="S.10">S.10. The SAS Unit is staffed with qualified personnel.</option>' +
  '<option value="S.11">S.11. The various student services are provided with adequate staff, physical facilities, equipment and materials (e.g. one (1) guidance counselor for every 1,000 students, etc.)</option>' +
  '<option value="S.12">S.12. There is sufficient budget allocation for the Student Affairs and Services of the institution.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER B IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter B' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The ratio of a  Guidance  Counselor to student  population is 1:1000.</option>' +
  '<option value="I.2">I.2. Counseling  and other  student  records are  maintained  and kept  confidential.</option>' +
  '<option value="I.3">I.3. Appropriate  intervention  programs and  services are  adopted to  promote and enhance  student welfare and  development.</option>' +
  '<option value="I.4">I.4. The Guidance office  maintains an updated  inventory of student  cumulative  records.</option>' +
  '<option value="I.5">I.5. The  Psychological tests are  administered,  scored and  interpreted by  qualified staff and the  results are kept  confidential.</option>' +
  '<option value="I.6">I.6. The test  results are  disseminated  to concerned parties.</option>' +
  '<option value="I.7">I.7. Test  results are  utilized in  designing  activities to  meet student needs.</option>' +
  '<option value="I.8">I.8. A scheme for  appropriate  follow-up  and referrals  to utilized.</option>' +
  '<option value="I.9">I.9. The  Guidance  office prepares  valid appraisal data of  students for  career and job  placement.</option>' +
  '<option value="I.10">I.10. Student Placement is regularly monitored and followed up.</option>' +
  '<option value="I.11">I.11. The institution maintains active networking with the schools, the communities, alumni, and other concerned agencies for career and job placements of students.</option>' +
  '<option value="I.12">I.12. Career counseling is provided to enable students to choose appropriate major/field of specialization.</option>' +
  '<option value="I.13">I.13. Information materials on career and job opportunities are made accessible.</option>' +
  '<option value="I.14.1">I.14.1. awards received;</option>' +
  '<option value="I.14.2">I.14.2. key positions in private and/ or government agencies; and</option>' +
  '<option value="I.14.3">I.14.3. status of the enterprise, if applicable.</option>' +
  '<option value="I.15">I.15. Skills development programs are conducted.</option>' +
  '<option value="I.16">I.16. The students are given assistance in career and job placement.</option>' +
  '<option value="I.17.1">I.17.1. student laboratory cooperatives;</option>' +
  '<option value="I.17.2">I.17.2. entrepreneurial activities / projects</option>' +
  '<option value="I.17.3">I.17.3. savings; </option>' +
  '<option value="I.17.4">I.17.4. others (please specify)</option>' +
  '<option value="I.18">I.18. Updated information on student welfare and development are accessible and disseminated.</option>' +
  '<option value="I.19">I.19. The student body is involved in the development and revision of Student Handbook.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER B OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 3' && parameterValue == 'Parameter B' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1 Quality Student Welfare Services are available</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER B System
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter B' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The  institution has a Student  Handbook  containing  comprehensive  information on  programs and  services for  student welfare and  development.</option>' +
  '<option value="S.2">S.2. A regular and  comprehensive  Orientation  Program is held for new,  returning and  continuing  students.</option>' +
  '<option value="S.3.1">S.3.1.The 3.1. R.A. 9262 or  Anti-Violence Against  Women and  Children Act;</option>' +
  '<option value="S.3.2">S.3.2. Anti-  Bullying Act;</option>' +
  '<option value="S.3.3">S.3.3. Guidelines  on drug  abuse  prevention  and control;</option>' +
  '<option value="S.3.4">S.3.4. R.A. 7877 or  the Anti-  Sexual  Harassment  Act of 1995;</option>' +
  '<option value="S.3.5">S.3.5. HIV AIDS awareness</option>' +
  '<option value="S.3.6">S.3.6. Self-  care and  healthy  lifestyles; and</option>' +
  '<option value="S.3.7">S.3.7. R.A. 9442,  particularly on  the provision on public  ridicule and  vilification against  persons with  disability.</option>' +
  '<option value="S.4.1">S.4.1. Information  and Inventory</option>' +
  '<option value="S.4.2">S.4.2. Counseling;</option>' +
  '<option value="S.4.3">S.4.3. Appraisal and testing;</option>' +
  '<option value="S.4.4">S.4.4. Placement and follow- up; and</option>' +
  '<option value="S.4.5">S.4.5. Referral.</option>' +
  '<option value="S.5">S.5. Gender- sensitive  individual and group  counseling is  provided;</option>' +
  '<option value="S.6">S.6. Counseling services  consider cultural differences.</option>' +
  '<option value="S.7">S.7. The Guidance Program is  headed by a licensed  Guidance  Counselor with at least a  master\'s degree  in Guidance and  Counseling.</option>' +
  '<option value="S.8">S.8. All the Guidance  Counselors are licensed.</option>' +
  '<option value="S.9">S.9. The Guidance Program is supported  by qualified staff.</option>' +
  '<option value="S.11">S.11. A counseling room is  provided for students  including  those with  special needs.</option>' +
  '<option value="S.12">S.12. There is  a well-planned  assessment  program for  students with  appropriate  standardized  psychological tests.</option>' +
  '<option value="S.13">S.13. Career seminars and job  placement  services are  available for  the students.</option>' +
  '<option value="S.14">S.14. There is a mechanism  to establish  partnership and  collaboration  with other  institutions,  agencies and  industry.</option>' +
  '<option value="S.15">S.15.There is  a mechanism  for storing and  achieving  student  records for  reference  purposes.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER C IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter C' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. Requirements  and procedures  for recognition/  accreditation of student  organizations  are widely  disseminated</option>' +
  '<option value="I.2">I.2. The Constitution and  by-laws of student organizations incorporate participation and  advocacy in social  action activities.</option>' +
  '<option value="I.3">I.3. The  institution conducts leadership training.</option>' +
  '<option value="I.4.1">I.4.1. Govern themselves as a  student body;</option>' +
  '<option value="I.4.2">I.4.2. Be transparent and  accountable to  their constituents; and</option>' +
  '<option value="I.4.3">I.4.3. be represented in various for a while the students need  to be consulted.</option>' +
  '<option value="I.5">I.5. The institution ensures transparency in  the development/ revision of guidelines and procedures for  the student council/ government.</option>' +
  '<option value="I.6">I.6. The institution implements gender and disability  sensitive rules and regulations  published in a  Student Handbook/ Manual acceptable to students.</option>' +
  '<option value="I.7">I.7. Sanctions are enforces for  misconduct such as but  not limited to acts of  vandalism, hazing,  bullying, libelous  statements and other  negative acts that  threaten peace and  order inside and  outside the school premises.</option>' +
  '<option value="I.8">I.8. Grievance Committee is established to ensure due process  in dealing with students  misconduct.</option>' +
  '<option value="I.9">I.9. The institution supports the  establishment and  implementation of  student publication as  provided for in R.A. 7079, otherwise knows as  "Campus Journalism  Act of 1991" and other media forms.</option>' +
  '<option value="I.10">I.10. The production/ publication of a  yearbook is  encouraged.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER C OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter C' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Quality student  development  services are assured.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER C System
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter C' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution has a system of  accreditation, monitoring and evaluation of student  organizations.</option>' +
  '<option value="S.2">S.2. The institution provides adequate office space and  other forms of support to accredit student  organizations.</option>' +
  '<option value="S.3">S.3. There is coordination between the school  administration and SAS  concerning  students with  drug and other related problems.</option>' +
  '<option value="S.4">S.4. A mechanism to address student grievance is in place.</option>' +
  '<option value="S.5">S.5. Programs and opportunities to develop and enhance leadership among students are provided.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER D IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter D' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The faculty and students are properly informed of the admission guidelines and retention policies.</option>' +
  '<option value="I.2">I.2. The policies and procedures on selection, admission and retention of students are implemented.</option>' +
  '<option value="I.3.1">I.3.1. enrollment trends;</option>' +
  '<option value="I.3.2">I.3.2. drop-out rate;</option>' +
  '<option value="I.3.3">I.3.3. Licensure examination results and passing percentage;</option>' +
  '<option value="I.3.4">I.3.4. employability of graduates;</option>' +
  '<option value="I.3.5">I.3.5. student transferees; and</option>' +
  '<option value="I.3.6">I.3.6. student classification by specialization.</option>' +
  '<option value="I.4">I.4. Retention policies are approved by the Academic Council and confirmed by the Board of Regents/ Trustees.</option>' +
  '<option value="I.5">I.5. The list of tuition and other school fees is posted conspicuously.</option>' +
  '<option value="I.6">I.6. The institution provides access to scholarship and financial assistance.</option>' +
  '<option value="I.7">I.7. Guidelines on scholarship and financial assistance are widely and promptly disseminated.</option>' +
  '<option value="I.8">I.8. Criteria for safety, sanitation and food choices in the school canteen/ cafeteria are enforced.</option>' +
  '<option value="I.9">I.9. The institution coordinates with the local government for the safety and sanitation of food service outside the school premises.</option>' +
  '<option value="I.10">I.10. The institution periodically inspects foods outlets for sanitation and hygiene. The sanitary permit is displayed in a prominent area of the food outlet.</option>' +
  '<option value="I.11">I.11. The primary health care services are administered to all students by licensed medical, dental and allied professionals.</option>' +
  '<option value="I.12">I.12. Facilities for keeping health care and updated health records of students are adequate and well-maintained.</option>' +
  '<option value="I.13">I.13. Policies and procedures in the selection of student athletes, performers, writers, etc. are implemented.</option>' +
  '<option value="I.14">I.14. Health and related laws, rules and regulations are enforced.</option>' +
  '<option value="I.16">I.16. Earthquake and fire drills involving students, faculty and administrative staff are conducted regularly.</option>' +
  '<option value="I.17">I.17. The institution establishes programs for the students to help in crime prevention, cleanliness and orderliness, observance of a clean and green environment, safety and security of the school premises.</option>' +
  '<option value="I.18">I.18. The institution provides assistance to students on accessible, affordable, clean, and conducive to learning, dormitories and housing facilities.</option>' +
  '<option value="I.19">I.19. The institution ensures that the students right to practice his/her religion is respected.</option>' +
  '<option value="I.20">I.20. Submission of required reports on foreign students right</option>' +
  '<option value="I.21">I.21. The Code of Conduct for foreign students with special needs.</option>' +
  '<option value="I.22">I.22. The institution accommodates students with special needs</option>' +
  '<option value="I.23">I.23. There is a regular submission of the list of students with special needs to the CHEDRO describing the Institutions intervention programs.</option>' +
  '<option value="I.24">I.24. Sports development programs are regularly conducted.</option>' +
  '<option value="I.25">I.25. The institution ensures opportunities for students to participate in socio and civic action activities.</option>' +
  '<option value="I.26">I.26. The students are covered with Life and Accident Insurance.</option>' +
  '<option value="I.27">I.27. the institution rewards SAS staff for exceptional job performance.</option>' +
  '<option value="I.28">I.28. The institution informs the students and others stakeholders on other related programs and services not cited in CMO NO.9 s, 2013.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER D OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter D' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The institutional programs and services develop student potentials to the fullest.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER D System
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter D' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is a system of student recruitment, selection, admission and retention.</option>' +
  '<option value="S.2">S.2. Admission requirements and procedures of persons with disabilities as stipulated in R.A. 7277 are in place.</option>' +
  '<option value="S.3">S.3. Scholarships and financial assistance in various forms are available to students.</option>' +
  '<option value="S.4">S.4. Policies and guidelines are institutionalized for students from marginalized sector of the country.</option>' +
  '<option value="S.5">S.5. There is a policy on wellness and healthy lifestyle.</option>' +
  '<option value="S.6">S.6. Buildings and facilities which conform with government standards are provided with accessible and safe amenities for persons with disabilities.</option>' +
  '<option value="S.7">S.7. There is a disaster risk reduction and management program in compliance with R.A. 10121, otherwise known as the “Philippine Disaster Risk Reduction and Management Act of 2010.”</option>' +
  '<option value="S.8">S.8. Policies on the use of student facilities are in place.</option>' +
  '<option value="S.9">S.9. An integrated service program that cares to the various needs of foreign students are available, whenever applicable.</option>' +
  '<option value="S.10">S.10. A liaison officer is available to assist foreign students in their transactions with concerned government agencies, whenever applicable.</option>' +
  '<option value="S.11">S.11. There are programs for life skills training (e.g. conflict and stress management, harassment, etc.) counseling, testing and referrals for students with special needs.</option>' +
  '<option value="S.12">S.12. The institution provides opportunities for promotion and appreciation of culture and arts.</option>' +
  '<option value="S.13">S.13. The institution has well equipped offices for:</option>' +
  '<option value="S.13.1">S.13.1. Culture and the Arts;</option>' +
  '<option value="S.13.3">S.13.3. Student Publications;</option>' +
  '<option value="S.13.4">S.13.4. Medical-Dental Clinic.</option>' +
  '<option value="S.14">S.14. There is a well-furnished medical-dental clinic.</option>' +
  '<option value="S.15.1">S.15.1. diagnostic purposes;</option>' +
  '<option value="S.15.3">S.15.3. prevention and prophylaxis;</option>' +
  '<option value="S.15.4">S.15.4. physical-dental exam.</option>' +
  '<option value="S.16">S.16. An updated information on student health condition is available to parents/guardians.</option>' +
  '<option value="S.17">S.17. There are mechanism to promote national, sectoral and cultural sports activities and development in coordination with concerned agencies.</option>' +
  '<option value="S.18.1">S.18.1. educational loans;</option>' +
  '<option value="S.18.2">S.18.2. student assistantship;</option>' +
  '<option value="S.18.3">S.18.3. attendance to seminars, training (sports, leadership, etc.;</option>' +
  '<option value="S.18.4">S.18.4. grants-in-aid; </option>' +
  '<option value="S.18.5">S.18.5. others (please specify)</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER E IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter E' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. Researches  on student  affairs and  services are conducted.</option>' +
  '<option value="I.2">I.2. Research results and outputs are disseminated and  utilized.</option>' +
  '<option value="I.3">I.3. Regular  monitoring and evaluation on the implementation of student services are conducted.</option>' +
  '<option value="I.4">I.4. Monitoring and evaluation instruments are developed, reviewed, and continuously improved.</option>' +
  '<option value="I.5">I.5. Reports are filed and submitted regularly to CHEDRO.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER E OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter E' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Research outputs are presented and published.</option>' +
  '</select>'+
'</div>';
}

// AREA 4 PARAMETER E System
else if(levelValue == 'Level 1' && areaValue == 'Area 4' && parameterValue == 'Parameter E' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution  has a research  program on student  affairs and  services.</option>' +
  '<option value="S.2">S.2. There is mechanism for monitoring and evaluation of SAS programs.</option>' +
  '<option value="S.3">S.3. Monitoring and evaluation instruments are available.</option>' +
  '<option value="S.4">S.4. There is adequate funding for the conduct of SAS researches and  monitoring and evaluation.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER A IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter A' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The approved  Research Agenda  is implemented.</option>' +
  '<option value="I.2.1">I.2.1. Administrators;</option>' +
  '<option value="I.2.2">I.2.2. Faculty;</option>' +
  '<option value="I.2.3">I.2.3. Students;</option>' +
  '<option value="I.2.4">I.2.4. government agency representatives  (DOST, CHED, NEDA, etc.); and</option>' +
  '<option value="I.2.5">I.2.5. other stakeholders (alumni, parents, etc.)</option>' +
  '<option value="I.3">I.3. Action researches to test theory in practice  are conducted by faculty and students.</option>' +
  '<option value="I.4">I.4. Team/ collaborative and  interdisciplinary research is  encouraged.</option>' +
  '<option value="I.5">I.5. Research outputs are published in refereed national and/or  international journals</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER A OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter A' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Priority researches are identified and conducted.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER A System
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter A' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The Institution\'s  research agenda is  in consonance with institutional,  regional and  national priorities  concerned such as  DOST, CHED- National Higher  Education Research  Agenda, NEDA, etc.</option>' +
  '<option value="S.2">S.2. The institution  has an approved  Research Manual.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER B IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter B' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. Allocates adequate funds for the conduct of faculty and student research.</option>' +
  '<option value="I.2">I.2. Establishes linkages with the local / national / international agencies for funding support and assistance.</option>' +
  '<option value="I.3">I.3. Maintains a functional and long-range program of faculty/ staff development to enhance research capability and competence.</option>' +
  '<option value="I.2.3">I.2.3. Students;</option>' +
  '<option value="I.2.4">I.2.4. government agency representatives  (DOST, CHED, NEDA, etc.); and</option>' +
  '<option value="I.2.5">I.2.5. other stakeholders (alumni, parents, etc.)</option>' +
  '<option value="I.3">I.3. Action researches to test theory in practice  are conducted by faculty and students.</option>' +
  '<option value="I.4">I.4. Encourages the conduct of externally funded researches.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER B OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter B' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The Research Program is adequately funded.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER B System
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter B' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The institution has an approved and adequate budget for research.</option>' +
  '<option value="S.2.1">S.2.1. Facilities  and equipment  such as Internet, Statistical Software, and other ICT resources;</option>' +
  '<option value="S.2.2">S.2.2. Research staff;</option>' +
  '<option value="S.2.3">S.2.3. Supplies and  materials; and</option>' +
  '<option value="S.2.4">S.2.4. Workplace</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER C IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter C' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The institution/ College/Academic Unit has a Research Unit managed by  competent staff.</option>' +
  '<option value="I.2">I.2. The Research Manual provides guidelines and procedures for the administration and conduct of research.</option>' +
  '<option value="I.4">I.4. The institution provides incentives to faculty  researchers such as  honoraria, service credits, deloading, etc.</option>' +
  '<option value="I.5">I.5. The College/ Academic Unit  requires its  students to conduct research as a  course requirement (whenever applicable).</option>' +
  '<option value="I.6">I.6. The Institution provides  opportunities for  advanced studies and/or training to enhance faculty/ staff research competence.</option>' +
  '<option value="I.7">I.7. Completed and  on-going research studies are  periodically  monitored and evaluated in local  and regional in- house reviews.</option>' +
  '<option value="I.8.1">I.8.1. institutional development</option>' +
  '<option value="I.8.2">I.8.2. the improvement of instructional processes;</option>' +
  '<option value="I.8.3">I.8.3. the transfer of generated technology / knowledge to the community</option>' +
  '<option value="I.9">I.9. Packaged technologies and  new information are  disseminated to the  target clientele through  appropriate  delivery system.</option>' +
  '<option value="I.10.1">I.10.1. Research outputs are  protected by IPR laws; and</option>' +
  '<option value="I.10.2">I.10.2. Faculty and students observe research ethics to avoid malpractices like plagiarism, fabrication of data, etc.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER C OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter C' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Implementation, Monitoring, Evaluation and Research utilization of Outputs are Effective.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER C System
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter C' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is a system of implementation, monitoring, evaluation and utilization of research outputs.</option>' +
  '<option value="S.2">S.2. The institution has a policy on Intellectual Property Rights (IPR).</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER D IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter D' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The institution provides  opportunities for  the dissemination of research results in  fora, conferences, seminars, and other related means.</option>' +
  '<option value="I.2">I.2. The institution regularly publishes  a research journal.</option>' +
  '<option value="I.3">I.3. Library  exchange of  research  publications with  other HEI\'s and agencies is  maintained.</option>' +
  '<option value="I.4">I.4. Research manuscripts / technical reports  are well-written, and edited  following the  institutional format.</option>' +
  '<option value="I.5.1">I.5.1. Instructional Materials  Development;</option>' +
  '<option value="I.5.2">I.5.2. Paper presentations, journal publication,  classroom lectures  and other similar activities;</option>' +
  '<option value="I.5.3">I.5.3. Editorship/ writing in  academic, scientific  and professional journals;</option>' +
  '<option value="I.5.4">I.5.4. Thesis/ Dissertation  Advising; and</option>' +
  '<option value="I.5.5">I.5.5. Patenting of Research Outputs.</option>' +
  '<option value="I.7">I.7. Research results are disseminated to the target clientele.</option>' +
  '<option value="I.8">I.8. The College / Academic Unit  generates income  from patents, licenses, copyrights, and other research outputs.</option>' +
  '</select>'+
'</div>';
}

// AREA 5 PARAMETER D OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 5' && parameterValue == 'Parameter D' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Research outputs are published in refereed journals.</option>' +
  '<option value="O.2">O.2. Research outputs are utilized.</option>' +
  '<option value="O.3">O.3. Patented and copyrighted research outputs are commercialized.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER A System
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter A' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. The extension agenda is in consonance of local, regional and national development thrusts and priorities.</option>' +
  '<option value="S.2">S.2. The College/ Academic Unit has a benchmark survey of the problems, needs priorities and resources of the community.</option>' +
  '<option value="S.3">S.3. The extension program reflects the VMGO.</option>' +
  '<option value="S.4">S.4. There is a pool of consultants/ experts from various disciplines to serve in extension projects and activities.</option>' +
  '<option value="S.5">S.5. The institution has an approved and copyrighted Extension Manual.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER A IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter A' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The extension projects and activities implemented are based on the results of the benchmark survey.</option>' +
  '<option value="I.2">I.2. The extension projects and activities complement the curriculum of the program under review.</option>' +
  '<option value="I.3">I.3. A mutual exchange of resources and services between the College/ Academic Unit and the community is evident.</option>' +
  '<option value="I.4">I.4. Linkages with local, national, foreign and non-governmental agencies are institutionalized.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER A OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter A' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. Priority and relevant extension projects and activities are conducted.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER B System
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter B' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is a distinct office that manages the Extension Program.</option>' +
  '<option value="S.2">S.2. Instruments for monitoring and evaluation are available.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER B IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter B' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The administration, faculty, students and other stakeholders of the College/ Academic Unit participate in the planning and organization of Extension Program.</option>' +
  '<option value="I.2">I.2. The administration, faculty and students are involved in the implementation and dissemination of extension programs.</option>' +
  '<option value="I.3">I.3. The extension projects and activities serve varied clientele.</option>' +
  '<option value="I.4">I.4. The conduct of extension projects and activities is sustainable.</option>' +
  '<option value="I.5">I.5. Technologies/ new knowledge are disseminated to the target clientele through appropriate extension delivery systems.</option>' +
  '<option value="I.6">I.6. The extension activities are documented in the form of:</option>' +
  '<option value="I.6.1">I.6.1. pamphlets;</option>' +
  '<option value="I.6.2">I.6.2. flyers;</option>' +
  '<option value="I.6.3">I.6.3. bulletin;</option>' +
  '<option value="I.6.4">I.6.4. newsletter; </option>' +
  '<option value="I.6.5">I.6.5. electronic resources.</option>' +
  '<option value="I.7">I.7. Periodic monitoring and evaluation of extension projects and activities are conducted.</option>' +
  '<option value="I.8">I.8. Results of monitoring and evaluation are disseminated and discussed with concerned stakeholders.</option>' +
  '<option value="I.9">I.9. Re-planning of activities based on the feedback is conducted.</option>' +
  '<option value="I.10">I.10. Accomplishment and terminal reports are filled and submitted on time.</option>' +
  '</select>'+
'</div>';
}


// AREA 6 PARAMETER B OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter B' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The Extension Program is well - planned, implemented, monitored, evaluated and disseminated.</option>' +
  '<option value="O.2">O.2. The Extension Program has contributed to the improvement on the quality of life of the target clientele/ beneficiaries.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER C System
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter C' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is an approved and adequate budget for extension.</option>' +
  '<option value="S.2.1">S.2.1. facilities and equipment such as internet and other ICT resources;</option>' +
  '<option value="S.2.2">S.2.2. extension staff;</option>' +
  '<option value="S.2.3">S.2.3. supplies and materials; </option>' +
  '<option value="S.2.4">S.2.4. workplace</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER C IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter C' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1">I.1. The budget for the extension program is utilized as planned.</option>' +
  '<option value="I.2">I.2. Honoraria and other incentives (deloading, credit unit equivalent, etc.) to faculty involved in extension work are granted.</option>' +
  '<option value="I.3">I.3. The College/ Academic Unit sources out the following from other agencies:</option>' +
  '<option value="I.3.1">I.3.1. additional funding; </option>' +
  '<option value="I.3.2">I.3.2. technical assistance and service inputs.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER C OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter C' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. The Extension Program is adequately funded.</option>' +
  '</select>'+
'</div>';
} 

// AREA 6 PARAMETER D System
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter D' && categoryValue == 'System'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="S.1">S.1. There is a strategy for involving the community, government and private agencies in the Extension Program.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER D IMPLEMENTATION
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter D' && categoryValue == 'Implementation'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="I.1.1">I.1.1. initiates and maintains community development projects;</option>' +
  '<option value="I.1.2">I.1.2. involves the students, faculty, staff administrators in the projects;</option>' +
  '<option value="I.1.3">I.1.3. coordinates its community programs and services with the target clientele.</option>' +
  '<option value="I.2.1">I.2.1. planning;</option>' +
  '<option value="I.2.2">I.2.2. implementation and dissemination;</option>' +
  '<option value="I.2.3">I.2.3. monitoring and evaluation;</option>' +
  '<option value="I.2.4">I.2.4. out-sourcing of funds, materials and other service inputs; </option>' +
  '<option value="I.2.5">I.2.5. utilization of technology, knowledge learned, skills, acquired from the extension projects and activities.</option>' +
  '</select>'+
'</div>';
}

// AREA 6 PARAMETER D OUTCOMES
else if(levelValue == 'Level 1' && areaValue == 'Area 6' && parameterValue == 'Parameter D' && categoryValue == 'Outcomes'){
  var html = 
  '<div class="appendedField">'+
  '<select data-role="select" name="uploadIn" id="uploadIn" form="drive_form" required>'+
  '<option value="O.1">O.1. There is wholesome coordination between the Extension Program implementers and the target clientele/ beneficiaries.</option>' +
  '</select>'+
'</div>';
} 



if(levelValue == 'Level 1' && areaValue == 'Area 1'){
  var parameterOption = 
  '<div class="appendedFieldParameter">'+
  '<select data-role="select" name="selectParameter" id="selectParameter" form="drive_form" onchange="dynamicFields()" required>'+
  '<option value="Parameter A">Parameter A</option>'+
  '<option value="Parameter B">Parameter B</option>'+
  '</select>'+
  '</div>';
}
else if (levelValue == 'Level 1' && areaValue == 'Area 2'){
  var parameterOption = 
  '<div class="appendedFieldParameter">'+
  '<select data-role="select" name="selectParameter" id="selectParameter" form="drive_form" onchange="dynamicFields()" required>'+
  '<option value="Parameter A">Parameter A</option>' +
  '<option value="Parameter B">Parameter B</option>' +
  '<option value="Parameter C">Parameter C</option>' +
  '<option value="Parameter D">Parameter D</option>' +
  '<option value="Parameter E">Parameter E</option>' +
  '<option value="Parameter F">Parameter F</option>' +
  '<option value="Parameter G">Parameter G</option>' +
  '<option value="Parameter H">Parameter H</option>' +
  '</select>'+
  '</div>';
}
else if (levelValue == 'Level 1' && areaValue == 'Area 3'){
  var parameterOption = 
  '<div class="appendedFieldParameter">'+
  '<select data-role="select" name="selectParameter" id="selectParameter" form="drive_form" onchange="dynamicFields()" required>'+
  '<option value="Parameter A">Parameter A</option>' +
  '<option value="Parameter B">Parameter B</option>' +
  '<option value="Parameter C">Parameter C</option>' +
  '<option value="Parameter D">Parameter D</option>' +
  '<option value="Parameter E">Parameter E</option>' +
  '<option value="Parameter F">Parameter F</option>' +
  '</select>'+
  '</div>';
}
else if (levelValue == 'Level 1' && areaValue == 'Area 4'){
  var parameterOption = 
  '<div class="appendedFieldParameter">'+
  '<select data-role="select" name="selectParameter" id="selectParameter" form="drive_form" onchange="dynamicFields()" required>'+
  '<option value="Parameter A">Parameter A</option>' +
  '<option value="Parameter B">Parameter B</option>' +
  '<option value="Parameter C">Parameter C</option>' +
  '<option value="Parameter D">Parameter D</option>' +
  '<option value="Parameter E">Parameter E</option>' +
  '</select>'+
  '</div>';
}
else if (levelValue == 'Level 1' && areaValue == 'Area 5'){
  var parameterOption = 
  '<div class="appendedFieldParameter">'+
  '<select data-role="select" name="selectParameter" id="selectParameter" form="drive_form" onchange="dynamicFields()" required>'+
  '<option value="Parameter A">Parameter A</option>' +
  '<option value="Parameter B">Parameter B</option>' +
  '<option value="Parameter C">Parameter C</option>' +
  '<option value="Parameter D">Parameter D</option>' +
  '</select>'+
  '</div>';
}
else if (levelValue == 'Level 1' && areaValue == 'Area 6'){
  var parameterOption = 
  '<div class="appendedFieldParameter">'+
  '<select data-role="select" name="selectParameter" id="selectParameter" form="drive_form" onchange="dynamicFields()" required>'+
  '<option value="Parameter A">Parameter A</option>' +
  '<option value="Parameter B">Parameter B</option>' +
  '<option value="Parameter C">Parameter C</option>' +
  '<option value="Parameter D">Parameter D</option>' +
  '</select>'+
  '</div>';
}

$(".appendedFieldParameter").remove();
$( ".appendHereParameter" ).append( parameterOption );



  $(".appendedField").remove();
  $( ".appendHere" ).append( html );
 }




