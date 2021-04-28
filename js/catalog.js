/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  const option = document.createElement('option')
  selectElement.appendChild(option)
  for (let i in Product.allProducts) {
  const optionElement = document.createElement('option')
  selectElement.appendChild(optionElement)
  optionElement.textContent = Product.allProducts[i].name;
  optionElement.value = Product.allProducts[i].name;
    }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
  document.getElementById('catalog').reset();
}

// TODO: Add the selected item and quantity to the cart


// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  const headerCounter = document.getElementById('itemCount');
  headerCounter.textContent=`(${cart.items.length})`

  const selectElement = document.getElementById('items');
  const selectedItemIndex = selectElement.selectedIndex;
  const selectedItem = selectElement.options[selectedItemIndex].text;
  const quantity = document.getElementById('quantity');
  const quantityVal = quantity.value;
  const cartContents = document.getElementById('cartContents');
  const ul = document.createElement('ul')
  cartContents.appendChild(ul)
  const li = document.createElement('li')
  ul.appendChild(li)
  li.textContent= `(${quantityVal}) of ${selectedItem}`
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();


