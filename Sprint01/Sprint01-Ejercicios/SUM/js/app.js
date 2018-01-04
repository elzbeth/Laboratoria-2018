document.getElementById('html');
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  console.log(array);
  console.log(`Una progresión de ${start} a ${end} con un salto de ${step} es ${array}`);
}

function sum(start,end,step){
	var newArray=[];
	for (var i = start; i <= end ; i++) {
		newArray.push(i)
	}

	var sumResult=0;
	for (var i = newArray[0]; i <= newArray.length; i++) {
		sumResult= sumResult + i;
	}
	console.log(sumResult)
  console.log(`La suma de los digitos del ${start} a ${end} es de ${sumResult}`);
}

sum(1,10)
range(1,10,2)
range(5, 2, -1)
range(7,4, -2)
