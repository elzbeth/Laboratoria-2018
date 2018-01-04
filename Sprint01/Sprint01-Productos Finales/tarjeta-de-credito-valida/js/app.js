document.getElementById('html');

	function isValidCard(){
		var cardNumber= prompt('Ingresa el número de la tarjeta');     			//Solicita el número de la tarjeta.
			if(!isNaN(cardNumber)){																						//Verifica que solo sean números.
				if(cardNumber.length >= 10 && cardNumber.length <= 16){					//Se asegura que sea el número correcto de dígitos.

					cardNumber=cardNumber+"";																			//Agrega un (no)espacio.
					cardNumber=cardNumber.split("").reverse().join("");						//Corta el (no)espacio, invierte el orden, une sin espacios.

					var valid;																										//Regresará la validez de la tarjeta.
					var sum = 0;																									//Dónde se guardará la suma para la comprobación del algoritmo.
					var digits = cardNumber.length;																//La cantidad de digitos a comprobar.
					var parity = digits % 2;																			//Verifica que los digitos sean par.

					for (var i = 0; i < digits; i++) {														//Evalua cada digito.
						var digit= parseInt(cardNumber.charAt(i));									//Pasa de string a number cada digito ubicado en i.
						if(i % 2 == parity){ 																				//Si la posición del dígito es par, lo duplica.
							digit *= 2;
						}

						if(digit > 9){ 																							//Si el digito es menor a 9 el dígito permanece igual.
							digit -= 9;
						}

						sum += digit;																								//Suma los digitos.
					}

					if (sum % 10 == 0){																						//Si el módulo 10 de la suma es igual a cero, guarda la variable valid como verdadera.
						valid = true;
						console.log( 'La tarjeta es valida');
						var result = document.getElementById('result');
						var valid = document.createTextNode('La tarjeta es válida.');
						result.appendChild(valid);

					}

					if (sum % 10 !== 0){																					//Si el módulo 10 de la suma es no igual a cero, guarda la variable valid como falsa.
						valid = false;
						console.log( 'La tarjeta no es valida');
						var result = document.getElementById('result');
						var invalid = document.createTextNode('Lo sentimos,el número de la tarjeta no es válido.');
						result.appendChild(invalid);

					}

				}else{
					alert('Verifica el número de tu tarjeta.\nDebes ingresar mínimo 10 y máximo 16 dígitos.\nAsegurate de solo utilizar números.')
				}																																//Advierte de error en el ingreso del número de tarjeta.
			}else{
				alert('Solo se puede ingresar números.');												//Advierte sobre el tipo de dato a ingresar.
			}
		console.log(valid);																									//Muestra en consola el valor de valid.
		return valid;																												//Regresa si la tarjeta es valida.
	}

isValidCard()
