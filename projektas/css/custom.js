function padetiAsmeniIMasyva(vardas, pavarde, email, komentaras, asmenys){
	let asmuo = {
		vardas: vardas,
		pavarde: pavarde,
		email: email,
		komentaras:  komentaras
	};

	asmenys.push(asmuo);

	return asmenys;
}


function ziuretiDaugiau() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Rodyti daugiau";
    moreText.style.display = "none";

  } else {

	  dots.style.display = "none";
    btnText.innerHTML = "Rodyti mažiau";
    moreText.style.display = "inline";
  }
}


function ziuretiDaugiau2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Rodyti daugiau";
    moreText.style.display = "none";
  }
	else {
    dots.style.display = "none";
    btnText.innerHTML = "Rodyti mažiau";
    moreText.style.display = "inline";
  }
}

