var select = document.querySelector('select');
select.addEventListener('change', function (ev) {
    var url = location.pathname;
    url = url + "?gender=" + select.value;
    console.log(select.value);
    location.href = url;
});

var button = document.querySelector('.headerNav__btnSearch');
button.addEventListener('click', function () {
    var url = location.pathname;
    var input = document.querySelector('.headerNav__input');
    var search = input.value;
    url = url + '?search=' + search;

    location.href = url;
});


