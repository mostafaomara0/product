let userData = document.querySelector("#user")
let links = document.querySelector("#links")
let userInfo = document.querySelector(".user-info")
if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display = "flex"
    userData.innerHTML=localStorage.getItem("username")
    let logOutBtn =document.querySelector(".log-out")

    logOutBtn.addEventListener("click",function(){
        localStorage.clear()
        setTimeout(function(){
        window.location="login.html"
        },1500)
    })

}