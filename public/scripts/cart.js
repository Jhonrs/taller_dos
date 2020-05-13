var btnAdd = document.querySelectorAll('.btn__add');

var cartBtn = document.querySelector('.headernav__cartbtn');

var cartList = [];

if (localStorage.getItem('cartList')) {
    cartList = JSON.parse(localStorage.getItem('cartList'));
}

cartBtn.innerText = cartList.length;

function renderCart() {

    
    var total = 0;
    
    var listCart = document.querySelector('.cart__list');
    cartList.innerHTML = "";
    cartList.forEach(function (obj, index) {
        var newItem = document.createElement('div');
        newItem.classList.add('cart__item');
        newItem.innerHTML = `
        <p class= "cart__title">${obj.title}</p>
        <small class= "cart__price">${obj.price}</small>
        <img class= "cart__img" src= "${obj.img}"/>
        <button class= "cart__remove">Eliminar</button>
        `;
        
        var btn = newItem.querySelector('.cart__remove');
        btn.addEventListener('click', function(){
            listCart.splice(index,1); // quita el lista
            cartBtn.innerText = cartList.length; //recarga numero carro
            localStorage.setItem('cartList', JSON.stringify(cartList)); // actualiza lista en localstorage
            renderCart(); //render list
        });
        listCart.appendChild(newItem);
        
        
        total += parseInt(obj.price);
    });

    var totalElem = document.querySelector('.cart__total');
    totalElem.innerText = total;
}
cartBtn.addEventListener('click',renderCart());



btnAdd.forEach(function (elem) {
    elem.addEventListener('click', function () {

        var title = elem.getAttribute('data-title');
        var price = elem.getAttribute('data-price');
        var id = elem.getAttribute('data-id');
        var img = elem.getAttribute('data-img');
        cartList.push({
            title: title,
            price: parseInt(price),
            id: id,
            img: img,
        });
        cartBtn.innerText = cartList.length;
        localStorage.setItem('cartList', JSON.stringify(cartList));
        
        renderCart();
        console.log(title);
    });
});