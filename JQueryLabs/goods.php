<?php

    $articule = 0;

    if(isset($_GET["articule"])){
        $articule = $_GET["articule"];
    }


    if($articule == 1){
        $data = [ 'name' => 'Зачет', 'weight' => 5, 'cost' => 0.0, 'img' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPB3HwbG1Fm5tWeCX6T1YAH761vv-EF9-1g&usqp=CAU' ];
    }
    elseif($articule == 2){
        $data = [ 'name' => 'Биг дата', 'weight' => 0, 'cost' => 5000.0, 'img' => 'https://www.meme-arsenal.com/memes/bd7c2b6094d108c09aeee62667144754.jpg' ];
    }
    else{
        $data = [ 'name' => 'У нас такого нет!'];
    }

    header('Content-type: application/json');
    echo json_encode( $data );
?>