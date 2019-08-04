function arSkaiciusDidesnisUz10(skaicius){
	
	if(skaicius > 10){
		document.write("Skaicius" + skaicius + "didesnis uz 10");
}
	
	else{
		document.write("Skaicius" + skaicius + "mazesnis uz 10");
	}
function arSkaiciusDidesnisUz10(skaicius){
	
	let statusas = "";
	
	if(skaicius > 10){
		statusas = "didesnis";
	}
	else if(skaicius == 10 ){
		statusas = "lygus";
	}
	
	else{
		statusas = "mazesnis uz";
	}
		document.write("Skaicius" + skaicius + " " + statusas + " 10<br>");
		
}


function arTeisingasSlaptazodis(paduodamasSlaptazodis){
	let esamasSlaptazodis = "qwerty123";

	if (paduodamasSlaptazodis == esamasSlaptazodis ){
		document.write("teisingas<br>");
	}
	else {
		document.write("neteisingas<br>");

	}
}