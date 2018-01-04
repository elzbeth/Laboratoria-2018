document.getElementById('html');


function sort(theArray,element){

var newArray=theArray.sort()
for (var i = 0; i < newArray.length; i++) {
	if(newArray[i]== element){
		console.log(`En ${theArray}, "${element}" se encuentra en el index ${newArray.indexOf(element)}`);
		}
	}
}

sort([4,5,3,1,2], 4)
