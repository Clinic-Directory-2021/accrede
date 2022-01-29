
$('#selectDepartment').on('change', function(e){
$( ".department_result" ).remove();

   if(e.target.value == "IT"){
    var url = "/manage_accounts";

    // Construct the full URL with "id"
    document.location.href = url + "?department=" + "IT";


   }
   else if (e.target.value == "HRM"){
    var url = "/manage_accounts";

    // Construct the full URL with "id"
    document.location.href = url + "?department=" + "HRM";
   }
   else if (e.target.value == "TOURISM"){
      var url = "/manage_accounts";
  
      // Construct the full URL with "id"
      document.location.href = url + "?department=" + "TOURISM";
     }
     else if (e.target.value == "EDUC"){
      var url = "/manage_accounts";
  
      // Construct the full URL with "id"
      document.location.href = url + "?department=" + "EDUC";
     }
});


function editModal(user_id, fname, mname, lname, email, contact, address){
    $('#edit_user_id').val(user_id);

    $('#edit_firstname').val(fname);
    $('#edit_middlename').val(mname);
    $('#edit_lastname').val(lname),
    $('#edit_email').val(email);
    $('#edit_contact').val(contact);
    $('#edit_address').val(address);
}



$('#addAccountForm').on('submit', function(e){

   $('#addAccountBtn').prop('disabled', true);
   e.preventDefault();
   console.log("1");


   $.ajax({
       type: 'post',
       url: "/addAccount/",
       data: {
         access_rights: $('#selectDepartment').val(),
         firstname: $('#firstname').val(),
         middlename: $('#middlename').val(),
         lastname: $('#lastname').val(),
         email: $('#email').val(),
         password: $('#password').val(),
         confirm_password: $('#confirm_password').val(),
         contact: $('#contact').val(),
         address: $('#address').val(),
         birthdate: $('#birthdate').val(),
         user_level: $('input[name="access_rights"]:checked').val(),
         csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val(),
         },
       success: function(data){
           if(data=="Password Do Not Match!"){
               $('#addAccountBtn').prop('disabled', false);
                Swal.fire({
                   icon: 'error',
                   title: data,
                   confirmButtonText: 'OKAY',
                 })
           }else if (data == 'Success!'){
               $('#addAccountBtn').prop('disabled', false);
               location.reload();
           }
       },
       error: function(data){
           $('#addAccountBtn').prop('disabled', false);
           Swal.fire({
               icon: 'error',
               title: 'Oops...',
             })
       },
 
   });
});



$('#edit_addAccountForm').on('submit', function(e){

    $('#edit_addAccountBtn').prop('disabled', true);
    e.preventDefault();
    console.log("1");
 
 
    $.ajax({
        type: 'post',
        url: "/editAccount/",
        data: {
          access_rights: $('#access_rights').val(),
          firstname: $('#edit_firstname').val(),
          middlename: $('#edit_middlename').val(),
          lastname: $('#edit_lastname').val(),
          email: $('#edit_email').val(),
          contact: $('#edit_contact').val(),
          address: $('#edit_address').val(),
          birthdate: $('#edit_birthdate').val(),
          user_level: $('input[name="access_rights"]:checked').val(),
          user_id: $('#edit_user_id').val(),
          access_rights: $('#selectDepartment').val(),
          csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val(),
          },
        success: function(data){
            if(data=="Password Do Not Match!"){
                $('#addAccountBtn').prop('disabled', false);
                 Swal.fire({
                    icon: 'error',
                    title: data,
                    confirmButtonText: 'OKAY',
                  })
            }else if (data == 'Success!'){
                $('#addAccountBtn').prop('disabled', false);
                location.reload();
            }
        },
        error: function(data){
            $('#addAccountBtn').prop('disabled', false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
              })
        },
  
    });
 });
