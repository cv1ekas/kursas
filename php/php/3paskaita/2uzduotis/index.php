
<!DOCTYPE html>
<html lang="">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title></title>
</head>

<body>
	<form action="<?php $_PHP_SELF; ?>" method="POST">
		Kraštinės aukštis: <input type="text" name="aukstis"/><br><br>
		Kraštinės ilgis: <input type="text" name="ilgis"/><br>
		<input type="submit" name="submit" value="skaičiuoti">
	</form>

	<?php
		if(isset($_POST['submit'])){
			$aukstis = $_POST['aukstis'];
			$ilgis = $_POST['ilgis'];
			$plotas = $aukstis*$ilgis;
		echo "Stačiakampio plotas kurio kraštinės
			$aukstis ir $ilgis yra $plotas";
}
	?>




</body>
</html>

