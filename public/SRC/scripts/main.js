var changed = document.querySelector('.content__containerInt');
var firstChange = changed.querySelector('.containerInt__Img');
var btnChange= document.querySelectorAll('.btn__color');

console.log(btnChange.length);

function iterateButtons(btn, index) {

    function handleClickColors() {
        console.log("change");
        firstChange.setAttribute('src','./img/zapato_'+(index)+".png");
    }

    btn.addEventListener('click', handleClickColors);
}

btnChange.forEach(iterateButtons);