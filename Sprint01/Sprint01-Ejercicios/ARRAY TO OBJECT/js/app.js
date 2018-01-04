document.getElementById('html');

function arrayToObject(theArray){
	object = {};

	for (var i = 0; i < theArray.length; i++) {
		object [theArray[i][0]] = theArray[i][1]

	}
	console.log (object);
}

var theArray=[['Mes', 'Octubre'],['Dia','18'],['Año','2017']];
arrayToObject(theArray);


alert('hithere');
