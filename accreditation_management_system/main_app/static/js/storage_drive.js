

setInterval(generateFilename, 1000);

function generateFilename() {
    
var area = document.getElementById("selectArea");
var parameter = document.getElementById("selectParameter");
var category = document.getElementById("selectCategory");
var date = document.getElementById("selectDate");

var drive_upload = $('#drive_upload')[0].files[0];

var areaValue = area.value;
var parameterValue = parameter.value;
var categoryValue = category.value;
var dateValue = date.value;

    $('#fileName').val(areaValue+'_'+parameterValue+'_'+categoryValue+'_'+dateValue+'_'+Date.now()+'_'+drive_upload.name);
  }