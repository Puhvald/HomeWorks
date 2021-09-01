$(document).ready(function () {
    let inputs = $('input');

    $(inputs[0]).on('keypress', function (event) {
        let result = event.key;
        if (isNaN(result) === false) {
            event.preventDefault();
        }
    });

    $(inputs[1]).keypress(function (event) {
        let result = event.key;
        if (result === ',' || result === '.') {
            event.preventDefault();
        }
    });

    $(inputs[5]).change(function () {
        if (this.checked === true) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    });

    $('button').click(() => {
        if ($(inputs[0]).val() === '') {
            alert('Заполните поле Full Name');
        } else if ($(inputs[1]).val() === '') {
            alert('Заполните поле Your username');
        } else if ($(inputs[2]).val() === '') {
            alert('Заполните поле E-mail');
        } else if ($(inputs[3]).val() === '') {
            alert('Заполните поле Password');
        } else if ($(inputs[4]).val() === '') {
            alert('Заоплните Repeat Password');
        } else if ($(inputs[3]).val() !== $(inputs[4]).val()) {
            alert('Пароли не совпадают!');
        } else if ($(inputs)[5].checked === false) {
            alert('Вы не согласились на наши условия!');
        } else {
            alert('OKAY');
        }
    });

    $('a').click(() => {
        $('#form-title').text('Log in to the system');
        let deleted = $('.input-box')
        $(deleted)[0].remove();
        $(deleted)[2].remove();
        $(deleted)[4].remove();
        $('#checkbox').remove();
        $('button').text('Sing In')
        $('a').remove();
    });
});



