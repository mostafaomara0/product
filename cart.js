let productInCart = localStorage.getItem("theNewAdded")
let allProduct = document.querySelector(".product")
if(productInCart){
    let item = JSON.parse(productInCart)
    drowproductCart(item)
}
function drowproductCart (product){
    let y = product.map(function(item){
        return`
        <div class="product">
          <div class="product-item">
            <img src="${item.imagsrc}" alt="" />
            <div class="product-item-des">
              <h2>${item.title}</h2>
              <p>the new phone in Egypt</p>
              <p> color :${item.color}</p>
              <button onclick="removeFromCart(${item.id})" class="check">Remove</button>
            </div>
          </div>
        </div>
     
        `

    })

    allProduct.innerHTML=y

}


function removeFromCart(){
  let deleteItem=  localStorage.getItem("(theNewAdded)")
  if(deleteItem){
  let ff=  deleteItem.JSON.parse(theNewAdded)
  ff.map(function(item){
        ff.id=
    })
}

  
}