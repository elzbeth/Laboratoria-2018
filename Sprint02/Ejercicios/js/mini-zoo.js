

document.getElementById("menu").addEventListener("change",playing);
function playing(event) {

	var selectedIndex = event.target.selectedIndex;
	var applyingFilter = event.target[selectedIndex].dataset.filter;
	if (applyingFilter == "gray") {
		filterGray();
	} else if (applyingFilter == "sepia") {
		filterSepia();
  } else if (applyingFilter == "invert") {
    filterInvert();
	} else if (applyingFilter == "normal") {
		original();
	}
}

function filterGray() {
	var imageToChange = document.getElementsByTagName("img");
	for (var i=0; i < imageToChange.length; i++) {
		imageToChange[i].className = "gray";
	}
}

function filterSepia() {
	var imageToChange = document.getElementsByTagName("img");
	for (var i=0; i < imageToChange.length; i++) {
		imageToChange[i].className = "sepia";
	}
}

function filterInvert() {
	var imageToChange = document.getElementsByTagName("img");
	for (var i=0; i < imageToChange.length; i++) {
		imageToChange[i].className = "invert";
	}
}

function original() {
	var imageToChange = document.getElementsByTagName("img");
	for (var i=0; i < imageToChange.length; i++) {
		imageToChange[i].style.filter = "none";
	}
}
