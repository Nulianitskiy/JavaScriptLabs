window.onload = function () {

    //получаем идентификатор элемента
    var a = document.getElementById('switch');
    
    //вешаем на него событие
    a.onclick = function() {
        let text_li = ""

		while (text_li !== null){
			text_li = prompt('Введите содержимое списка: ')
			let create_li = document.createElement('li');
			create_li.innerHTML = text_li;
			document.getElementById("task_5").prepend(create_li);
    }
}
}