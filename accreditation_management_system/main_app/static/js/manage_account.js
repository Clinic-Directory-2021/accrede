


$('#selectDepartment').on('change', function(e){
$( ".department_result" ).remove();

   if(e.target.value == "IT"){
    var url = "/manage_accounts";

    // Construct the full URL with "id"
    document.location.href = url + "?department=" + "IT";


    // $.post({
    //     type: 'post',
    //     url: "/manage_accounts/",
    //     data: {
    //         department: "IT",
    //         csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val(),
    //     },
    //     success: function(data){
    //     $( ".department_result" ).remove();

    //     },
    //     error: function(data){
    //         alert(data + 'have an error');
    //     },

    // })
    // .done(function(data){
    //     // $('tbody').append(data);
    // });

   }
   else if (e.target.value == "HRM"){
    var url = "/manage_accounts";

    // Construct the full URL with "id"
    document.location.href = url + "?department=" + "HRM";
   }
});
