/* объявляем переменную массив, в котором будут находится случайно генерируемые элементы (в нашем случае имена картинок)  */
var banner = new Array('cat_loop.jpg','photo_2.jpg','photo_3.jpg','photo_4.jpg','photo_5.jpg');
/* считаем количество элементов в массиве с помощью оператора javascript - lenght */
var count = banner.length;
/* объявляем переменную random, в которую пропишем случайное число, от нуля до максимального номера элемента нашего массива banner (то есть: от нуля до четырех).
Для этого используется Math.random - этот метод генерирует случайное число  от 0 до 1 . Так как это число может иметь большое количество знаков после запятой, мы округляем его с помощью метода Math.floor. В итоге максимальное число не пять, а четыре, и минимальное не единица, а ноль (что отвечает порядку нумерации элементов в массивах banner[0], banner[1] и т.д.)    */
//var random = Math.floor(Math.random()*4);
/* выводим случайный элемент (в нашем случае - случайную картинку из директории /img/ ) */
//document.write('<img src="../pictures/cat_loop.jpg" alt="случайное изображение" />');

function rndShow(){
    var random = Math.floor(Math.random()*4);
    //alert(random);

    let img1 = document.querySelector('.rnd__img1');
    let img2 = document.querySelector('.rnd__img2');
    let img3 = document.querySelector('.rnd__img3');
    let img4 = document.querySelector('.rnd__img4');

    img1.innerHTML = '';
    img2.innerHTML = '';
    img3.innerHTML = '';
    img4.innerHTML = '';
    switch (random) {
        case 0:
            img1.innerHTML = '<img src="./pictures/cat_loop.jpg" alt="cat loop" width="50%"/>';
            break;
        case 1:
            img2.innerHTML = '<img src="./pictures/cat_loop.jpg" alt="cat loop" width="50%"/>';
            break;
        case 2:
            img3.innerHTML = '<img src="./pictures/cat_loop.jpg" alt="cat loop" width="50%"/>';
            break;
        case 3:
            img4.innerHTML = '<img src="./pictures/cat_loop.jpg" alt="cat loop" width="50%"/>';
            break;
        default: break;
        }
    return;
}

setInterval(rndShow, 1000);