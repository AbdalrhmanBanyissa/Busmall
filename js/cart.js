/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.innerHTML = '<thead><tr><th>Remove</th><th>Quantity</th><th>Item</th></tr></thead>';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

             TODO: Find the table body
        let  tbody = document.getElementsByTagName('tbody');
    
             TODO: Iterate over the items in the cart
          for (let  i = 0; i < cart.items.length; i++) {
                  TODO: Create a TR
            let  tr = document.createElement('tr');
            tr.setAttribute('id', i);
             TODO: Create a TD for the delete link, quantity,  and the item
           
    
    

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  Cart.all =[];
 
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

  console.log(Cart.all);
  for (let i = 0; i < Cart.all.length; i++) {
    // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

    let trE = document.createElement('tr');
    tableE.appendChild(trE);
    trE.setAttribute('class',Cart.all[i].items.product);

    let tdE = document.createElement('td');
    trE.appendChild(tdE);
    tdE.innerText = 'X';
    tdE.setAttribute('class',Cart.all[i].items.product);

    let  tdE = document.createElement('td');
    trE.appendChild(tdE);

    tdE.innerText = Cart.all[i].items.quantity ; 
    let  tdE = document.createElement('td');
    trE.appendChild(tdE);
    tdE.innerText = Cart.all[i].items.product;
  }

}


function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

    // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
    console.log(event.target.className);
    if(event.target.innerText ==='X'){
      document.getElementsByClassName(event.target.className)[0].remove();
  
      localStorage.removeItem(event.target.className);
  
    
    };
}

// This will initialize the page and draw the cart on screen
renderCart();