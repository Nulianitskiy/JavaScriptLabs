<?php
    session_start();
    $second=$_POST['second'];
    $_SESSION['second']= $second;
?>
<body> 
    <h1>Тест по языкам программирования</h1>
    <table width = 400>
        <tr>
            <td align = center> 
                <form action="part4.php" method="POST"> 

                <h2>Третий вопрос</h2>

                <h2>2^10:</h2> 
                <select name="third">
                <option value = 1> 256</option>
                <option value = 2> 512</option>
                <option value = 3> 1024</option>
                <option value = 4> много</option>
                </select> 
                <br>
                <input type ="submit" value="Отправить запрос!"> 
                </form>  
            </td>
        </tr>
    </table>
</body> 