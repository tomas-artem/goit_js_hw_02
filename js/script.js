var arrNames = [];
var i;

for (i = 1; i < 6; i++) {
    arrNames[i - 1] = prompt('Введите имя #' + i);
}

var userName = prompt('Пожалуйста, введите своё имя:');

if ((userName === '') || (userName === null)) {
    userName = 'Таинственный незнакомец';
    alert('Таинственный незнакомец? :)');
}

for (i = 0; i < 5; i++) {
    if (arrNames[i] === userName) {
        alert(userName + ' , Вы успешно вошли!');
        i = 100;
    }
}

if (i < 100) {
    alert('Error!!!');
}