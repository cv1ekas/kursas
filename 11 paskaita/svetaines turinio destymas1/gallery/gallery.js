//function startGallery(){
//	let image = document.querySelector(".image img");
//	image.addEventListener("click", function(){
//		
//	});

function startGallery(){
	document.querySelector(".modal").addEventListener("click")
}

function createImage(imageLink){
		let divMain = document.createElement("div");
//		let divMainClass = document.createAttribute("class", "coll4");
		divMain.setAttribute("class", "coll4");
		
		let divImage =  document.createElement("div");
		divImage.setAttribute("class", "image");
		divMain.appendChild(divImage);
		
		let image = document.createElement("img");
		image.setAttribute("src", "https://picsum.photos/300/200");
		image.setAttribute("id", 1);
		divImage.append(image);
	Image.addEventListener
	
	image.addEventListener("click", function(){
		document.querySelector(".modal").style.display= "flex";
								  })
	let image = document.createElement("img");
	image.setAttribute("src", this.getAttribute("src"))
		
		
		let gallery = document.querySelector(".gallery .row");
		gallery.appendChild(divMain);
}
