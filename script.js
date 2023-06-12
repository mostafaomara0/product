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
// ******************************************************

let allProduct = document.querySelector(".product")

let product=[
     {
        id:1,
        title:"oppo reno 7",
        color: "gray",
        imagsrc:"image/images (32)_1642_041539.jpeg"
     },
     {
        id:2,
        title:"Iphone 14 Pro Max",
        color: "wheat",
        imagsrc:"image/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-gold-220907_inline.jpg.large.jpg"
     },
     {
        id:3,
        title:"Apple Watch",
        color: "gray",
        imagsrc:"image/download.jpg"
     },
     {
        id:4,
        title:" Air Pods ",
        color: "black",
        imagsrc:"image/Apple-AirPods-Pro-2nd-gen-hero-220907.jpg.og.jpg"
     },
     {
        id:5,
        title:"dog",
        color: "yallow",
        imagsrc:"image/dog-img.jpg"
     },
]

function drow (){
    let y = product.map(function(item){
        return`
        <div class="product">
          <div class="product-item">
            <img src="${item.imagsrc}" alt="" />
            <div class="product-item-des">
              <h2>${item.title}</h2>
              <p>the new phone in Egypt</p>
              <p> color :${item.color}</p>
              <button onclick="addToCart(${item.id})" class="check">Add to Cart</button>
              <i class="far fa-heart icon1"></i>
            </div>
          </div>
        </div>
     
        `

    })

    allProduct.innerHTML=y

}
drow()
// ***********************************************************
//لو عاوز تخلي الرقم اللي في العداد ثابت ميقلش 
let badge = document.querySelector(".badge ")
let cartprouductsDiv = document.querySelector(".carts-products div")

let addedItem = localStorage.getItem("theNewAdded")?JSON.parse(localStorage.getItem("theNewAdded")):[]
if(addedItem){
    addedItem.map(function(item){
        cartprouductsDiv.innerHTML+= `<p>${item.title}</p>`
        badge.style.display="block"
        badge.innerHTML=addedItem.length
    })
}
//**************************************************** */
    
    if(localStorage.getItem("username")){
        
        function addToCart(id){
            let choosenItem=product.find((item) => item.id ===id)

            addedItem =[...addedItem,choosenItem]
            localStorage.setItem("theNewAdded" , JSON.stringify(addedItem))
            
            cartprouductsDiv.innerHTML +=`<p>${choosenItem.title}</p>`
            let badgeLenght = document.querySelectorAll(".carts-products p")
            badge.style.display="block"
            badge.innerHTML=badgeLenght.length
            
        
        }
      
    }
    else{
        location="login.html"
    }
  
    

///******************************** */
let shoppingCart = document.querySelector("nav .user-info li i")
let cartprouductt = document.querySelector(".carts-products")

shoppingCart.addEventListener("click",opencart)
function opencart(){
    if(cartprouductsDiv.innerHTML !=""){
        if(cartprouductt.style.display=="block"){
            cartprouductt.style.display="none"
        }
        else{
            cartprouductt.style.display="block"
        }
    }
}

