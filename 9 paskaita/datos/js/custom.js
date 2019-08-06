function duokManSiosDienosData(){
	
	let d = new Date();
	
	let metai = d.getFullYear("");
	let menuo = d.getMonth();
	let diena = d.getDate();
	
	menuo++;
	
	let menuoKaipTekstas = String(menuo);
	
	if(menuoKaipTekstas.length == 1){
		menuo = "0" + menuo;
	}
	let DienaKaipTekstas = String(diena);
	
	if(dienaKaipTekstas.length ==1){
		diena = "0" + diena;
	}
	let pilnaData = metai + "-" + menuo + "-" + diena;
	
	
	
	
	return pilnaData;
}