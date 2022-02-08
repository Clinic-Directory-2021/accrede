
$('#loginForm').on('submit', function(e){

    $('#loginBtn').prop('disabled', true);
    e.preventDefault();
    console.log("1");


    $.ajax({
        type: 'post',
        url: "/login_validation/",
        data: {
          login_email: $('#email').val(),
          login_password: $('#password').val(),
          csrfmiddlewaretoken: $("input[name='csrfmiddlewaretoken']").val(),
          },
        success: function(data){
            if(data=="Invalid Email or Password!"){
                //  $('#responseMessage').html(data);
                $('#loginBtn').prop('disabled', false);
                 Swal.fire({
                    icon: 'error',
                    title: data,
                    confirmButtonText: 'OKAY',
                  })
            }else if (data == 'Success!'){
                let timerInterval
                Swal.fire({
                allowOutsideClick: false,
                title: 'Signing in.',
                html: 'Please wait... <b></b> milliseconds.',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer');
                    window.location.href = "../logout/"
                }
                })
                $('#loginBtn').prop('disabled', false);
                location.reload();
            }
        },
        error: function(data){
            $('#loginBtn').prop('disabled', false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
              })
        },
  
    });
});
