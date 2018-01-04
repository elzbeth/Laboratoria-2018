var menuButton = document.getElementById('btn');

function showMenu(){
	var menu = document.getElementById('options-menu');

	if(menu.classList.contains('disabled-menu')){
		menu.classList.remove('disabled-menu');
		menu.classList.add('enabled-menu');
	}else{
		menu.classList.remove('enabled-menu');
		menu.classList.add('disabled-menu');
	}

}

menuButton.addEventListener("click",showMenu);

showMenu();
