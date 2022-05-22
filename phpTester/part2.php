<?php
    session_start();
    $first=$_POST['first'];
    $_SESSION['first']= $first;
?>

<body> 
    <h1>Тест по языкам программирования</h1>
    <table width = 400>
        <tr>
            <td align = center> 
                <form action="part3.php" method="POST"> 

                <h2>Второй вопрос</h2>

                <h2>Что такое СИ?</h2> 
                <select name="second">
                <option value = 1> Стандарт единиц измерения</option>
                <option value = 2> Язык программирования</option>
                <option value = 3> Нота</option>
                <option value = 4> Обозначение кремния в таблице Менделеева</option>
                <option value = 5> Муниципальный уровень административного деления Республики Корея</option>
                <option value = 6> Видеть</option>
                <option value = 7> Именной суффикс в японском языке.</option>
                </select> 
                <br>
                <input type ="submit" value="Отправить запрос!"> 
                </form>  
            </td>
        </tr>
    </table>
</body>  