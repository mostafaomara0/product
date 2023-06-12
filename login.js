let userName=document.querySelector("#username")
let password = document.querySelector("#password")
let loginBtn = document.querySelector("#sign-in")

let getUser = localStorage.getItem("username")
let getPass = localStorage.getItem("password")

loginBtn.addEventListener("click", function(e){
    e.preventDefault()
    if(userName.value=="" ||password.value=="" ){
        alert("kindly enter data")

    }
    else{
        if(getUser=== userName.value.trim() && getPass=== password.value.trim())
        setTimeout(function(){
            window.location ="index.html"
        
        },1500)
        else{
            alert("username or password is wrong")
        }

    }
})