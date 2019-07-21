<!DOCTYPE html>
<html lang="">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>

<body>
<?php
$num1 = 4;
$num2 = 7;
$result = $num1 + $num2;

 function skaiciuSuma() {
global $num1, $num2;
$result = $num1 + $num2; }
skaiciuSuma();
echo $result;
    ?>



</body>
</html>
