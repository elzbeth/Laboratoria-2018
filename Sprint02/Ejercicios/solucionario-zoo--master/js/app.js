
//esto es para no definir el event  en el html//
document.getElementById("menu").addEventListener("change",pasarAlgo);
document.getElementById("addImg").addEventListener("click", crearContenedor);

function crearContenedor() {
	var imagenNueva = document.createElement("img"); // creando elemento imag
	imagenNueva.src = "http://dummyimage.com/300x300"; // agregandole un atributo
	//document.body.appendChild(imagenNueva); // body es padre de imagenNueva
	
	var newP = document.createElement("p");
	newP.innerText = " texto nuevo";
	//document.appendChild(newP);

	var divContenedor = document.createElement("div");
	divContenedor.className = "contenedor-img"; // agrega la clase
	divContenedor.appendChild(imagenNueva);
	divContenedor.appendChild(newP);
	document.body.appendChild(divContenedor);

}

function pasarAlgo(event) {
	//console.log(event.target.selectedIndex);
	var selectedIndex = event.target.selectedIndex;// estudiar target ELEMENTO QUE DETONA EL EVENTO
	var filtroAplicar = event.target[selectedIndex].dataset.filtro;
	if (filtroAplicar == "gray") {
		cambiarAGray();
	} else if (filtroAplicar == "sepia") {
		cambiarASepia();
	} else if (filtroAplicar == "common") {
		sinFiltro();
	}
}

function cambiarAGray() {
	var imagenesACambiar = document.getElementsByTagName("img"); // lo vuelve una coleccion 
	for (var i=0; i < imagenesACambiar.length; i++) { // que se puede iterar
		imagenesACambiar[i].className = "gray";
	}
}

function cambiarASepia() {
	var imagenesACambiar = document.getElementsByTagName("img");
	for (var i=0; i < imagenesACambiar.length; i++) {
		imagenesACambiar[i].className = "sepia";
	}
}

function sinFiltro() {
	var imagenesACambiar = document.getElementsByTagName("img");
	for (var i=0; i < imagenesACambiar.length; i++) {
		imagenesACambiar[i].style.filter = "none";
	}
}