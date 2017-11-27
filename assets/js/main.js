function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'assets/potions.json', true);
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  }
  xobj.send(null);

}

function popData(potion_id) {
  loadJSON(function(response) {
    jsonresponse = JSON.parse(response);
    console.log(potion_id);
    console.log(jsonresponse.potions[potion_id]);
    potions = jsonresponse.potions[potion_id];
    //populando o Lightbox

    //populando imagem
    var img = document.createElement("img");
    img.setAttribute("src","assets/img/products/"+potions.image);
    document.getElementById("light-img").appendChild(img);

    //populando atributo titulo
    var title = document.createElement("h2");
    title.innerHTML = potions.name;
    document.getElementById("potion-content").appendChild(title);
    // use/effect
    var effectTitle = document.createElement("h2");
    effectTitle.innerHTML = "Use/Effect:";
    document.getElementById("potion-content").appendChild(effectTitle);
    var effect = document.createElement("p");
    effect.innerHTML = potions.effect;
    document.getElementById("potion-content").appendChild(effect);

    //Ingredients
    var ingredientTitle = document.createElement("h2");
    ingredientTitle.innerHTML = "Ingredients:";
    document.getElementById("potion-content").appendChild(ingredientTitle);
    ingredients = potions.ingredients;
    if(Array.isArray(ingredients)) {
      var ul = document.createElement('ul');
      ul.setAttribute('id', 'ingredients-list')

      document.getElementById("potion-content").appendChild(ul);
      ingredients.forEach(renderIngredientsList);

      function renderIngredientsList(element, index, arr) {
          var li = document.createElement('li');
          li.setAttribute('class','ingredient');

          ul.appendChild(li);

          t = document.createTextNode(element);

          li.innerHTML=li.innerHTML + element;
      }
    }

    //price
    var priceTitle = document.createElement("h2");
    priceTitle.innerHTML = "Price:";
    document.getElementById("potion-content").appendChild(priceTitle);
    var price = document.createElement("h2");
    price.innerHTML = "$"+potions.price;
    document.getElementById("potion-content").appendChild(price);

    //button
    var buyButton = document.createElement("button");
    buyButton.setAttribute("class", "btn");
    buyButton.setAttribute("id", "add-cart");
    buyButton.setAttribute("type", "submit");
    buyButton.innerHTML = "ADD TO CART";
    document.getElementById("potion-content").appendChild(buyButton);



  });

}


function parseId(potion_id, h) {
id =  parseInt(potion_id);
 popData(id);

}

/**
 * metodo que abre a lightbox
 */
function openLightbox(potion_id)
{
  parseId(potion_id);
  document.getElementById('light').style.display= 'block';
  document.getElementById('fade').style.display='block';
}

/**
 * metodo que abre a lightbox
 */
function closelightbox()
{
  document.getElementById('light').style.display='none';
  document.getElementById('fade').style.display='none';
}
