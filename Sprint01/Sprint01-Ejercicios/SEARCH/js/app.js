document.getElementById('html');


function search(theArray,theElement){


	for(i=0;i<=theArray.length;i++){
		var position =theArray.indexOf(i)
		if(theElement == i){
			console.log(`En ${theArray} la posición de ${theElement} es en el index ${position}.`)
		}
	}
}

search([1,2,3,4,5],5)
