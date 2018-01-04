  document.getElementById('html');

//----Forma 1

function objectToArray(object){

	newArray=[];
	properties= Object.keys(object);

	for (var i = 0; i < properties.length; i++) {
		newArray.push([properties[i], object[properties[i]]])
	}


	console.log(newArray);

}



var date ={
	month: 'Octubre',
	day: '18',
	year: '2017',
}

console.log(date);
objectToArray(date);
