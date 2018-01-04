document.getElementById('html');

function reverseArray(theArray){
 	newArray=[];
 	for (var i = theArray[0]; i <= theArray.length; i++) {
 		newElement= theArray.pop(i);
 		newArray.push(newElement);
 		i--;
 	}
 	console.log(newArray);
}


reverseArray([1,2,3,4,5,6])