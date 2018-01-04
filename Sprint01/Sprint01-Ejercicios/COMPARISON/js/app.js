document.getElementById('html');


function areArraysSame(theArray1,theArray2){

var same;

	if(theArray1.length === theArray2.length){

		for(i=0;i<=theArray1.length;i++){
			var item1 = theArray1[i]
			var item2 = theArray2[i]

			if((item1 === item2) &&
			   (theArray2.indexOf(i) === theArray1.indexOf(i))){
				same = true
			}
			else{
				 same = false
			}
		}

	}else{
		 same = false
		 }

 console.log(same)
}
console.log([1,2,3,4,5],[1,2,3,4,5]);
areArraysSame([1,2,3,4,5],[1,2,3,4,5]);
console.log([1,2,3,4,5,6],[6,5,4,3,2,1]);
areArraysSame([1,2,3,4,5,6],[6,5,4,3,2,1]);
console.log([1,2,3,4,5,6],[1,2,3,4,5]);
areArraysSame([1,2,3,4,5,6],[1,2,3,4,5]);
console.log([1,2,3,4,5],['a','b','c','d','e']);
areArraysSame([1,2,3,4,5],['a','b','c','d','e']);
console.log(['a','b','c','d','e'],['a','b','c','d','e']);
areArraysSame(['a','b','c','d','e'],['a','b','c','d','e']);
