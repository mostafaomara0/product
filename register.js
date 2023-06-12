let userName=document.querySelector("#username")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let registerBtn = document.querySelector("#sign-up")
registerBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(userName.value=="" ||password.value==""||email.value=="" ){
   alert("kindly fill data")
    }
    else{
        localStorage.setItem("username",userName.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("password",password.value)
        setTimeout(function(){
            window.location ="login.html"
        
        },1500)

    }
})

