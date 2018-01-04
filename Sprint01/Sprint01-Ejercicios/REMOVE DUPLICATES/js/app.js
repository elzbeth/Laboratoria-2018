document.getElementById('html');


function removeDuplicates(theArray){
    var reviewed = {};
    var newArray = [];
    for (var i = 0; i < theArray.length; i++) {
        if (!(theArray[i] in reviewed)) {
            newArray.push(theArray[i]);
            reviewed[theArray[i]] = true;
        }
    }
    console.log(newArray);

}


function removeDuplicates2(theArray){
    var newArray= [];

    for (var i = 0; i < theArray.length; i++) {
        if(newArray.indexOf(theArray[i])==-1){
            newArray.push(theArray[i]);

    }
        }
console.log(newArray)

}
	


removeDuplicates([1,2,3,7,48,9,2,2])
removeDuplicates(['rojo','azul','verde','cyan','rojo','amarillo','azul','azul','magenta'])
removeDuplicates2([1,2,3,7,48,9,2,2])
removeDuplicates2(['rojo','azul','verde','cyan','rojo','amarillo','azul','azul','magenta'])