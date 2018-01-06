var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    cart.push({[item]: Math.floor(Math.random()*100)})
    console.log(`${item} has been added to your cart.`)
    return cart
}

function viewCart() {
if (cart.length === 0){console.log('Your shopping cart is empty.')}
else if (cart.length === 1){`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}.`}

else if (cart.length===2){`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]} and ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}.`}

else if (cart.length ===3){`In your cart, you have ${Object.keys(cart[0])} at $${cart[0][Object.keys(cart[0])]}, ${Object.keys(cart[1])} at $${cart[1][Object.keys(cart[1])]}, and ${Object.keys(cart[2])} at $${cart[2][Object.keys(cart[2])]}.`}
  




 
}

function total() {
 
 var tot = 0; 
 for (var i = 0; i <cart.length; i++){
 tot += cart[i][Object.keys(cart[i])]}
 return tot;

}

function removeFromCart(item) {
    for (var i = 0; i<cart.length; i++)
    
  if (cart[i].hasOwnProperty(item));
  cart = cart.slice(0, i).concat.slice();
  {console.log(cart)}
  
 
  else {console.log('That item is not in your cart.')} 
  
  // write your code here
}

function placeOrder(cardNumber) {
  if (!cardNumber) {console.log("Sorry, we don\'t have a credit card on file for you.")} 
  else{
  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)}
   cart= []}


