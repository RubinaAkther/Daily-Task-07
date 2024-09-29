'use strict';

//================================================//
//==================Variables Start===============//
//================================================//

const cartIcon = document.querySelector('.cart__content img');
const cartBox = document.querySelector('.cart__box');
const normalPrice = document.querySelector('.normal__price');
const addCart = document.querySelector('.add__cart');
const qtylabel = document.querySelector('.qty__label');
const proContainer = document.querySelector('.pro__content');
const cart__empty = document.querySelector('.cart__empty');

// This is to increment and decrement
const qty = document.querySelector('.qty__number');
const decreament = document.querySelector('.decreament');
const increament = document.querySelector('.increament');

// Images
const imageLarge = document.querySelector('.img__thumbnail img');
const thumbImage = document.querySelectorAll('.img__small img');

// Model
const model = document.querySelector('.model');
const closeModel = document.querySelector('.close__icon');
const largeImageModel = document.querySelector('.img__thumbnailModel img');
const smallImageModel = document.querySelectorAll('.img__smallModel img');

//================================================//
//==================Variables End=================//
//================================================//

//================================================//
//==============EventListener Start===============//
//================================================//

let proPrice = 125;
let totalQty = qty.innerHTML;
let totalPrice;

decreament.addEventListener('click', () => {
  if (totalQty == 1) {
    totalQty = 1;
  } else {
    totalQty--;
  }
  totalPrice = proPrice * totalQty;
  normalPrice.textContent = `$${totalPrice}.00`;
  qty.textContent = totalQty;
});

increament.addEventListener('click', () => {
  totalQty++;
  totalPrice = proPrice * totalQty;
  normalPrice.textContent = `$${totalPrice}.00`;
  qty.textContent = totalQty;
});

// This is to add and hide the card
cartIcon.addEventListener('click', () => {
  cartBox.classList.toggle('display');
});

addCart.addEventListener('click', () => {
  qtylabel.style.display = 'block';
  qtylabel.innerHTML = totalQty;

  let html = `<div class="pro__content">
        <img
            src="./Images/image-product-1-thumbnail.jpg"
            alt="Image product 1"
        />
        <div class="para__details">
            <p class="poro__para">Fall Limited Edition Sneakers</p>
            <p class="price">
            $125.00 <span>X</span> <span class="times">${totalQty}</span>
            $<span class="total">${proPrice * totalQty}</span>
            </p>
        </div>
        <div class="trash">
            <img class="trash__img" src="./Images/icon-delete.svg" alt="Delete icon" />
        </div>
    </div>`;

  proContainer.insertAdjacentHTML('afterbegin', html);
  cart__empty.innerHTML = '';

  document.querySelector('.trash__img').addEventListener('click', () => {
    cart__empty.innerHTML = 'Your cart is Empty :)';
    proContainer.innerHTML = '';
    qtylabel.style.display = 'none';
  });
});

thumbImage.forEach((img, index) => {
  index++;
  img.addEventListener('click', (e) => {
    imageLarge.src = `Images/image-product-${index}.jpg`;
    thumbImage.forEach((thumb) => thumb.classList.remove('active'));
    img.classList.add('active');
  });
});

imageLarge.addEventListener('click', () => {
  model.style.display = 'block';
});

closeModel.addEventListener('click', () => {
  model.style.display = 'none';
});

smallImageModel.forEach((modelImage, index) => {
  index++;
  modelImage.addEventListener('click', (e) => {
    largeImageModel.src = `Images/image-product-${index}.jpg`;
    smallImageModel.forEach((thumb) => thumb.classList.remove('active'));
    modelImage.classList.add('active');
  });
});

//================================================//
//==============EventListener End=================//
//================================================//
