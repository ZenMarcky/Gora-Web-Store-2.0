function openNav(){
    document.querySelector(".hideNavbar").style.marginRight = "0"
}
function closeNav(){
  document.querySelector(".hideNavbar").style.marginRight = "-210px"
}

let addToCartItem = JSON.parse(localStorage.getItem("AddToCart"));

let id = JSON.parse(localStorage.getItem("MyId"));

if (addToCartItem === null) {
  addToCartItem = [];

}
if(id === null){
id = 0
}

if (addToCartItem.length < 1) {
  document.querySelector(".emptyMessage").style.display = "flex";
}
else{
  document.querySelector(".add-to-cart-body").style.display = "flex";
}

function addToCart(img,price,name){
  if (addToCartItem === null) {
    addToCartItem = [];

  }
if(id === null){
  id = 0
}



id++;

let item = {
  cartImg : img,
cartPrice: price,
cartName: name,
idGame : id
}
console.log(`this iid ${id}`)
localStorage.setItem("taskDetails", JSON.stringify(item));

addToCartItem.push(item)

localStorage.setItem('AddToCart',JSON.stringify(addToCartItem))
localStorage.setItem('MyId',JSON.stringify(id))
};



let cart = document.querySelector("#gameCartItems");

for(let i in addToCartItem){

let gameContainerParents = document.createElement('div');
gameContainerParents.classList = "gameContainerParents";
gameContainerParents.id = addToCartItem[i].idGame;

  let divClass1 = document.createElement('div');
  divClass1.className = "game-1";
  divClass1.id = addToCartItem[i].idGame;
let aRemoveButton = document.createElement('a');
aRemoveButton.innerHTML =  "<a class='removeButton' onClick='delFunction()'>Remove</a>"


  let gameImgDetail = document.createElement('div');
 gameImgDetail.className = "game-img-detail";

let gamePriceWishlist = document.createElement('div');
gamePriceWishlist.className = "game-img-detail-content"

let pricesParagraph = document.createElement('p');
pricesParagraph.textContent = `${addToCartItem[i].cartPrice}$`

let cartImg = document.createElement('img');
cartImg.src = `${addToCartItem[i].cartImg}`

let gameImgDetailContent = document.createElement('div');
gameImgDetailContent.className = "game-img-detail-content";

let gameTitle = document.createElement('p');
gameTitle.textContent = `${addToCartItem[i].cartName}`;

let answer = 0;
for(let e = 0;  e < addToCartItem.length; e++){
answer += parseFloat(addToCartItem[e].cartPrice);
}

document.querySelector("#total-cart").innerHTML = `${answer}$`;

cart.appendChild(gameContainerParents);

gameContainerParents.appendChild(divClass1)

divClass1.appendChild(gameImgDetail);
divClass1.appendChild(aRemoveButton);
divClass1.appendChild(gamePriceWishlist);
gamePriceWishlist.appendChild(pricesParagraph)
gameImgDetail.appendChild(cartImg);
gameImgDetail.appendChild(gameImgDetailContent);
gameImgDetailContent.appendChild(gameTitle)
}




function delFunction(){
let gameContainer = event.target.parentNode;
let gameContainerParents = gameContainer.parentNode;

let gameId = gameContainerParents.id;
console.log(gameId);

gameContainerParents.remove();

addToCartItem = addToCartItem.filter((id) => id.idGame != gameId);

let answer = 0;
for(let e = 0;  e < addToCartItem.length; e++){
answer += parseFloat(addToCartItem[e].cartPrice);
}

document.querySelector("#total-cart").innerHTML = `${answer}$`;

localStorage.setItem('AddToCart',JSON.stringify(addToCartItem))

if (addToCartItem.length === 0) {
  location.reload();
}


}




