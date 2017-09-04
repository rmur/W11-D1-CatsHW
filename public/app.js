var app = function() {

  addCat();

}

var addCat = function(name){

  var catUl = document.createElement('ul');
  catUl.classList.add('cat');

  var catNameLi = document.createElement('li');
  catNameLi.innerText = "Roma";

  var catFoodLi = document.createElement('li');
  catFoodLi.innerText = "Tuna";

  var catPhotoLi = document.createElement('li');
  var catPhoto = document.createElement('img');
  catPhoto.width = 500;
  catPhoto.src = "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"

  catPhotoLi.appendChild(catPhoto);
  catFoodLi.appendChild(catPhotoLi);
  catNameLi.appendChild(catFoodLi);
  catUl.appendChild(catNameLi);

  var cats = document.querySelector('#cats');
  cats.appendChild(catUl);

}

window.onload = app;