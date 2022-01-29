
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



$('#addAccountForm').on('submit', function(e){

   $('#addAccountBtn').prop('disabled', true);
   e.preventDefault();
   console.log("1");


   $.ajax({
       type: 'post',
       url: "/addAccount/",
       data: {
         access_rights: $('#access_rights').val(),
         name: $('#name').val(),
         email: $('#email').val(),
         password: $('#password').val(),
         confirm_password: $('#confirm_password').val(),
         contact: $('#confirm_password').val(),
         address: $('#address').val(),
         user_level: $('#user_level').val(),
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
