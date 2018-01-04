var submenu = document.getElementsByClassName("submenu");

for (var i = 0; i < submenu.length; i++) {
	console.log(submenu[i]);
	submenu[i].addEventListener("click", showMenu);
}

function showMenu(event) {
	var listMenu = this.getElementsByClassName("itemlist")[0];

	if(listMenu.classList.contains("hide")){
		listMenu.classList.remove("hide");
		listMenu.classList.add("show")
	} else {
		listMenu.classList.remove("show");
		listMenu.classList.add("hide");
	}
}
