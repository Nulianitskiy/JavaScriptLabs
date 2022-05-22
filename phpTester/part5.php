<?php
    session_start();
    $fourth=$_POST['fourth'];
    $_SESSION['fourth']= $fourth;
?>
<body> 
    <h1>Тест по языкам программирования</h1>
    <table width = 400>
        <tr>
            <td align = center> 
                <form action="final.php" method="POST"> 

                <h2>Пятый вопрос</h2>

                <h2>Курсач написан?:</h2> 
                <select name="fifth">
                <option value = 1> Нет(</option>
                <option value = 2> Да)</option>
                </select> 
                <br>
                <input type ="submit" value="Отправить запрос!"> 
                </form>  
            </td>
        </tr>
    </table>
</body> 