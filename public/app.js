var CATS_ARRAY = [
{name: "Serj", favFood: "Salmon", link:"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"}
]

var addCat = function(name, favFood, link){

  var catUl = document.createElement('ul');
  catUl.classList.add('cat');

  var catNameLi = document.createElement('li');
  catNameLi.innerText = name;

  var catFoodLi = document.createElement('li');
  catFoodLi.innerText = favFood;

  var catPhotoLi = document.createElement('li');
  var catPhoto = document.createElement('img');
  catPhoto.width = 500;
  catPhoto.src = link;

  catPhotoLi.appendChild(catPhoto);
  catFoodLi.appendChild(catPhotoLi);
  catNameLi.appendChild(catFoodLi);
  catUl.appendChild(catNameLi);

  var cats = document.querySelector('#cats');
  cats.appendChild(catUl);

}

var app = function() {
for (var cat of CATS_ARRAY){
  addCat(cat.name, cat.favFood, cat.link);
  }
}

window.onload = app;