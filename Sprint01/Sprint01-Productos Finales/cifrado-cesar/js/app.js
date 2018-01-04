document.getElementById('html');

function cipher(){
      var  text= prompt('Ingresa el texto que deseas cifrar');	//Solicita el texto a cifrar.

	    if(text!=''){																							//Evalua si el campo no está vacío.

			var ciphered=" ";                        									// Donde se guardará el texto cifrado.

			for(i=0; i< text.length; i++){       		 									//Recorre el texto ingresado para evaluar cada letra y
				var letterCode= text.charCodeAt(i);											//encontrar su equivalente en el código ASCII.

				if(65 <= letterCode  && letterCode <= 90){							//Evalua si la letra se encuentra entre el grupo de mayúsculas.
					ciphered += String.fromCharCode(( 			   					 	//Aplica la fórmula del cifrado, confierte en string y
					letterCode-65 + 33)% 26 + 65);				    					 	//agrega el resultado la variable del nuevo texto.
				}

				else if(97 <=letterCode && letterCode <= 122){					//Evalua si la letra se encuentra entre el grupo de minúsculas.
					ciphered += String.fromCharCode(( 			    					//Aplica la fórmula del cifrado, confierte en string y
					letterCode-97 + 33)% 26 + 97);				    						//agrega el resultado la variable del nuevo texto.
				}
				else{
					ciphered+=text.charAt(i);															//Conserva y regresa todos los carácteres que no son letras.
				}
			}
				// console.log(ciphered);																//Muestra el texto en consola.
				// alert(ciphered);																			//Muestra el texto en alerta.
				// document.write(ciphered);														//Muestra el texto en el documento
				// return ciphered;																			//Regresa el texto cifrado.

        var cipheredText = document.createElement('p');         //crea un párrafo
        var textCiphered = document.createTextNode(ciphered);   //Crea un nodo de texto con el resultado
        cipheredText.appendChild(textCiphered);                 //Agrega el nodo al elemento
        document.getElementById('ciphered').appendChild(cipheredText);  //Escribe el elemento en el documento

			}else{
				alert('El campo no puede estar vacio')                  //Advierte sobre el campo vacio
			}
	}






function decipher(){
       var  text= prompt('Ingresa el texto que deseas descifrar'); 		//Solicita el texto a descifrar.



	       if(text!=''){											   									//Evalua si el campo no está vacio.

			var deciphered=" ";                        								// Donde se guardara el texto cifrado.

			for(i=0; i< text.length; i++){       		 									//Recorre el texto ingresado para evaluar cada letra y
				var letterCode= text.charCodeAt(i);											//encontrar su equivalente en el código ASCII.

				if(65 <= letterCode  && letterCode <= 90){							//Evalua si la letra se encuentra entre el grupo de mayúsculas.
					deciphered += String.fromCharCode(( 									//Convierte en string el resultado de desplazar los caracteres en forma inversa.
					letterCode+32)% 26 + 65);					  									//agrega el resultado la variable del nuevo texto. ** interesante: si ponia 33 me desplazaba un lugar en el código. nota mental: averiguar si es por el index 0.
				}

				else if(97 <=letterCode && letterCode <= 122){					//Evalua si la letra se encuentra entre el grupo de minúsculas.
					deciphered += String.fromCharCode(( 									//Convierte en string el resultado de desplazar los caracteres en forma inversa.
					letterCode-26)% 26 + 97);				        							//agrega el resultado la variable del nuevo texto.
				}
				else{
					deciphered+=text.charAt(i);														//Conserva y regresa todos los carácteres que no son letras.
				}
			}
			// console.log(deciphered);																//Muestra el texto en consola.
			// alert(deciphered);																			//Muestra el texto en alerta.
			// document.write(deciphered);														//Muestra el texto en el documento.
			// return deciphered;																			//Regresa el texto descifrado.
      var decipheredText = document.createElement('p');         //Creq un párrafo
      var textDeciphered = document.createTextNode(deciphered); //Crea un nodo de texto con el resultado
      decipheredText.appendChild(textDeciphered);               //Agrega el nodo de texto al elemento
      document.getElementById('deciphered').appendChild(decipheredText); //Escribe el elemento en el documento
			}else{
					alert('El campo no puede estar vacio');								//Advierte que el campo no puedes estar vacio.
				}
}



	cipher();
	decipher();
