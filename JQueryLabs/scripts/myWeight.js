$('form').submit(function(){
    // чистим ошибки
    $(this).find('.error').remove();
    // проверяем поля формы
    if ($(this).find('input[name=weight]').val() == '') {
        $(this).find('input[name=sex]')
        return false;
    }
    // всё хорошо – отправляем запрос на сервер
    $.post(
        $(this).attr('action'), 
            $(this).serialize() // данные формы
    );
    return false;
});
