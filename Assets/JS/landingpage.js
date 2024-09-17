// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  //password validation for signup
  //email validation for signup

  document.querySelector('#signupButton').onclick= function() {

    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirmPassword').value;
    let email = document.querySelector('#validationEmail').value;
    let confirmEmail = document.querySelector('#confirmEmail').value;


   if (password =="") {
        alert ("Password cannot be empty");
   }
    else if (confirmPassword =="") {
        alert ("Please confirm your password");
        return false;
    }
    else if (password.length < 8) {
        alert ("password must be at least 8 characters long");
        return false;
    }
    else if (confirmPassword.length < 8) {
        alert ("confirm password must be at least 8 characters long");
        return false;
    }
    else if (password != confirmPassword) {
        alert ("passwords do not match try again,");
        return false;
    }
    else if (email =="") {
        alert ("Email cannot be empty");
    }
    else if (confirmEmail =="") {
        alert ("Please confirm your email");
        return false;
    }
    else if (email != confirmEmail) {
        alert ("emails do not match try again,");
        return false;
    }
    else {
        alert ("YOU HAVE SUCCESSFULLY SIGNED UP!");
        return true;
    }
  
  }


  //login validation
  document.querySelector('#loginButton').onclick= function() {

    let password = document.querySelector('#floatingPassword').value;
    let email = document.querySelector('#floatingInput').value;

    if (email =="") {
        alert ("Email cannot be empty");
    }
    else if (password =="") {
        alert ("Password cannot be empty");
    }
    else if (password.length < 8) {
        alert ("password must be at least 8 characters long");
        return false;
    }
    else {
        alert ("YOU HAVE SUCCESSFULLY LOGGED IN!");
        return true;
    }
  }





  
