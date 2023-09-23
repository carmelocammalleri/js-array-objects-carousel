// 2. collegare elementi html/js
const imageWrapper = document.querySelector('.image-wrap');
const infoGames= document.getElementById('info');
const btnUp = document.querySelector('.arrow-up');
const btnDown = document.querySelector('.arrow-down');

// bonus
const thumbNail = document.querySelector('.thumb')

// 3. creare array
const listImages = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morales',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
}, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
}, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
}, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
}, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
}
]

//5. creare contatore
let counter = 0;
printImg ()

//4. inserire img dentro html
function printImg (){
  listImages.forEach((info)=>{
    
    // 7.condizioni bonus
    thumbNail.innerHTML += `<div class="thumb-img"><img class="lumox" src="${info.image}" class=" item-thumb"></div>`
    
    //8. stampa codice
    imageWrapper.innerHTML += `<img src="${info.image}" class= " item hide">`;
    
    infoGames.innerHTML +=
        `<div class="text hide">
          <h3>${info.title}</h3>
          <span>${info.text}</span>
        </div>
        `;
  })
}

//6.
const itemHide = document.getElementsByClassName('item');
const active = document.getElementsByClassName('lumox');
const textInfo = document.getElementsByClassName('text');
itemHide[counter].classList.remove('hide');
active[counter].classList.add('active');
textInfo[counter].classList.remove('hide');

btnDown.addEventListener('click', downer)

btnUp.addEventListener('click', upper)

function downer (){
  itemHide[counter].classList.add('hide');
  active[counter].classList.remove('active');
  textInfo[counter].classList.add('hide');
  counter++;
  if(counter === itemHide.length){
    counter = 0
  }
  itemHide[counter].classList.remove('hide');
  active[counter].classList.add('active');
  textInfo[counter].classList.remove('hide');
}

function upper (){
  itemHide[counter].classList.add('hide');
  active[counter].classList.remove('active');
  textInfo[counter].classList.add('hide');

  if(counter === 0){
    counter = itemHide.length
  }
  counter--;
  
  itemHide[counter].classList.remove('hide');
  active[counter].classList.add('active');
  textInfo[counter].classList.remove('hide');
}

setInterval(upper, 5000)