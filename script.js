let btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    validateName();  
    validateEmail();
    validateUser();
    if(validatePass()){
        alert("form submitted successfully") 
    };

}); 

let name_error = document.getElementById('name_error');
let email_error = document.getElementById('email_error');
let username_error = document.getElementById('username_error');

function validateName() {

    let name = document.getElementById('name').value;
    

    if(name.length == 0 ){  
        name_error.innerHTML = "Name is required";
        return false;
    }
    else{
        name_error.innerHTML = "";
        return true;
    }
    
    
};

function validateEmail(){
    let email = document.getElementById('email').value;
    if(email.length == 0 ){  
        email_error.innerHTML = "email is required";
        return false;
    }
    else{
        email_error.innerHTML = "";
        return true;
    }
    
};


function validateUser(){
    let username = document.getElementById('username').value;
    if(username.length == 0 ){  
        username_error.innerHTML = "username is required";
        return false;
    }
    else{
        username_error.innerHTML = "";
        return true;
    } 
    
};


function validatePass(){
    let password = document.getElementById('password').value;
    if(password.length == 0 ){  
        password_error.innerHTML = "password is required";
        return false;
    }
    else{
        password_error.innerHTML = "";
        return true
    }
    ;
};
