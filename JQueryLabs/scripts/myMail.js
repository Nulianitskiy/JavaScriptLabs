$('mail_form').submit(function(){
    // чистим ошибки
    $(this).find('.error').remove();
    // проверяем поля формы
    if ($(this).find('input[name=fname]').val() == '') {
        $(this).find('input[name=lname]')
        return false;
    }
    // всё хорошо – отправляем запрос на сервер
    $.post(
        $(this).attr('action'), 
            $(this).serialize() // данные формы
    );
    
    return false;
});// скрипт пока не работает(