<? 
session_start();
$fifth=$_POST['fifth'];
$_SESSION['fifth']= $fifth;

if($_SESSION['first'] == 2){
    $score += 1;
}
if($_SESSION['second'] == 2){
    $score += 1;
}
if($_SESSION['third'] == 3){
    $score += 1;
}
if($_SESSION['fourth'] == 3){
    $score += 1;
}
if($_SESSION['fifth'] == 2){
    $score += 1;
}

echo "<!DOCTYPE html><html><head><meta charset='utf-8'/> </head><body>";
  echo '<h1>Время подводить результаты!</h1>'; 
	print "<div text-align:'center'>"; 
	print "Привет, ".$_POST['name']; 
	print "<br>Твой результат следующий:<br>";
    if ($score > 3) {
        print "<p>Ну ты молодец!</p>"; 
    }
    elseif ($score > 1){
        print "<p>Ты не молодец</p>";
    }
    else{
        print "<p>Программирование это не твое...</p>";
    }
print "</div>"; 
echo "</body></html>";
?>
