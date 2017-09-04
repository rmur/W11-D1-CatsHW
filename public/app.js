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
  catPhotoLi.innerText = "There will be picture";

  catFoodLi.appendChild(catPhotoLi);
  catNameLi.appendChild(catFoodLi);
  catUl.appendChild(catNameLi);

  var cats = document.querySelector('#cats');
  cats.appendChild(catUl);

}

window.onload = app;