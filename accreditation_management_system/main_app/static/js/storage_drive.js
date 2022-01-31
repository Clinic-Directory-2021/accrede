
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
  '<option value="S.5">S.5. The objective of  the program have  the expected  outcomes in terms  of competencies​ (skills,  knowledge),values  and other attributes  of the graduates  which include the  development of :​</option>'+
  '<option value="S.5.1">S.5.1 Technical Skills</option>'+
  '<option value="S.5.2">S.5.2 Research and Extension Capabilities</option>'+
  '<option value="S.5.3">S.5.3 Students\' own  ideas, desirable  attitudes and  personal discipline​</option>'+
  '<option value="S.5.4">S.5.4 Moral  character</option>'+
  '<option value="S.5.5">S.5.5 Critical, analytical, problem solving, and other higher order thinking skills</option>'+
  '<option value="S.5.6">S.5.6 aesthetic and  cultural values​</option>'+
'</select>'+
'</div>';
}



  $(".appendedField").remove();
  $( ".appendHere" ).append( html );
 }




