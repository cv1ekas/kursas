// funkcijai turi buti paduotas masyvas
function spauzdintiVardusIrPavardesISarasa(vardai){

	document.write("<ol>");

	for(let i = 0; i < vardai.lenght;i++){
		document.write("<li>"+vardai[i]+"</li>")
	}

	document.write("</ol>");
}
