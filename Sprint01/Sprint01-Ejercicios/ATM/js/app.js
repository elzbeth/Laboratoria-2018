document.getElementById('html');

var atm = [{denomination:100,quantity:100},
          {denomination:50,quantity:50},
          {denomination:20,quantity:200},
          {denomination:10,quantity:300},
          {denomination:5,quantity:500},
          {denomination:1,quantity:800}];
console.log(atm);



 
var operation = parseInt(prompt("Selecciona el tipo de operacion : \n 1. Retirar \n 2.Consultar Saldo \n 3. Salir"));


switch(operation){
  case 1:
	var initial = 0;
	for(var i = 0; i < atm.length; i += 1 ){
		var initial = initial += parseInt(atm[i].denomination * atm[i].quantity);
	}
	var initialP = document.createElement('p');
	var initialContent = document.createTextNode(`El saldo inicial es de: $${initial}`);
	initialP.appendChild(initialContent);
	document.getElementById('initial').appendChild(initialP);
	console.log(initialP);
    console.log("retirar")
	    var amountRequired = parseInt(prompt("Ingresa el monto a retirar "));
	    var theAmount= amountRequired;
	    var moneyDelivered = [];

		    for(var i = 0; i < atm.length; i += 1 ){
		      var billsRequired = 0;
		      var bills = 0;
		      if(amountRequired > 0){
		        billsRequired = parseInt(amountRequired/atm[i].denomination);
		        if(billsRequired > atm[i].quantity){
		          bills = atm[i].quantity;
		          atm[i].quantity -= bills;
		        }else{
		          bills = billsRequired;
		          atm[i].quantity -= bills;
		        }
		        moneyDelivered.push({denomination:atm[i].denomination,quantity:bills});
		        var billsDelivered = atm[i].denomination* bills;
		        amountRequired -= billsDelivered;
		      }else{
		        break;
		      }
					if(moneyDelivered[i].quantity >= 2){
					var delivered = document.createElement('p');
					var deliveredContent = document.createTextNode(`Se entregan ${moneyDelivered[i].quantity} billetes de $${atm[i].denomination}`);
					delivered.appendChild(deliveredContent);
					document.getElementById('delivered').appendChild(delivered);
					console.log( `Se entregan ${moneyDelivered[i].quantity} billetes de ${atm[i].denomination}`);
					}
					if(moneyDelivered[i].quantity === 1){
						var delivered = document.createElement('p');
						var deliveredContent = document.createTextNode( `Se entrega  ${moneyDelivered[i].quantity} billete de $${atm[i].denomination}`);
						delivered.appendChild(deliveredContent);
						document.getElementById('delivered').appendChild(delivered);
					console.log( `Se entrega  ${moneyDelivered[i].quantity} billete de ${atm[i].denomination}`);
					}
		    }
				var amountAsked = document.createElement('p');
				var amountAskedContent = document.createTextNode( `Monto total del retiro:  $${theAmount}`);
				amountAsked.appendChild(amountAskedContent);
				document.getElementById('retired').appendChild(amountAsked);
		    console.log(`Monto total del retiro:  ${theAmount}`)
				var total = 0;
				for(var i = 0; i < atm.length; i += 1 ){
					var total = total += parseInt(atm[i].denomination * atm[i].quantity);
				}
				var newTotal = document.createElement('p');
				var newTotalContent = document.createTextNode(`El nuevo saldo es de: $${total}`);
				newTotal.appendChild(newTotalContent);
				document.getElementById('total').appendChild(newTotal);
					console.log(`El saldo actual es de: ${total}`);
					console.log(atm);
					var newOperation=confirm('¿Deseas realizar otra operación?');
					if(newOperation){
						operation;
					}else{
									alert('Gracias por tu preferencia.')
			var farewell = document.createElement('p');
			var farewellContent = document.createTextNode(`Hasta pronto.`);
			farewell.appendChild(farewellContent);
			document.getElementById('farewell').appendChild(farewell);
			console.log(initialP);
					}
		    break;
	case 2:
	    console.log("consultar")
			var total = 0;
			for(var i = 0; i < atm.length; i += 1 ){
				var total = total += parseInt(atm[i].denomination * atm[i].quantity);
			}
			var newTotal = document.createElement('p');
			var newTotalContent = document.createTextNode(`El saldo actual es de: $${total}`);
			newTotal.appendChild(newTotalContent);
			document.getElementById('total').appendChild(newTotal);
			var newOperation=confirm('¿Deseas realizar otra operación?');
			if(newOperation){
				
			}else{
					alert('Gracias por tu preferencia.')
					var farewell = document.createElement('p');
					var farewellContent = document.createTextNode(`Hasta pronto.`);
					farewell.appendChild(farewellContent);
					document.getElementById('farewell').appendChild(farewell);
					console.log(initial);
			}
	    break;
	  case 3:
	    console.log("salir")
			alert('Gracias por tu preferencia.')
			var farewell = document.createElement('p');
			var farewellContent = document.createTextNode(`Hasta pronto.`);
			farewell.appendChild(farewellContent);
			document.getElementById('farewell').appendChild(farewell);
			console.log(initial);
	    break;

}
