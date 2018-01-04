#SPRINT 01 - PRODUCTO FINAL
## CÓDIGO CESAR

-Crear una web que pida, por medio de un prompt() una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

-Consideraciones Específicas:
	-El programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26.
	-El código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher.
	-El usuario no debe poder ingresar un campo vacío o que contenga números.
	
### CIFRAR.
	-Establecer una variable vacía (ciphred) que contendrá el texto cifrado.
	-Solicita el texto a cifrar por medio de un prompt.
	-Recorre el texto para evaluar por carácter.
	-Convierte en ASCII el carácter ubicado en (i).
		-Evalua si la letra es mayúscula para ubicarla entre los código 65 y 90.
			-Resta 65 a la letra y le suma la clave(33).
			-A lo anterior le saca el residuo o módulo de 26 y le suma 65.
			-Lo convierte a string pro medio de String.fromCharCode().
			-Agrega el resultado a ciphred.
		-Evalua si la letra es minúscula para ubicarla entre los códigos 97 y 122. 
			-Resta 65 a la letra y le suma la clave(33).
			-A loanterior le saca el residuo o módulo de 26 y le suma 65.
			-Lo convierte a string pro medio de String.fromCharCode().
			-Agrega el resultado a ciphred.
	-Regresa ciphred.


### DECIFRAR.

	-Establecer una variable vacía (deciphred) que contendrá el texto cifrado.
	-Solicita el texto a cifrar por medio de un prompt.
	-Recorre el texto para evaluar por carácter.
	-Obtine el código ASCII del carácter ubicado en(i).
	-Le resta 26 obteniendo el código de la letra original.
	-Convierte el nuevo código en ASCII.
	-Agrega la letra original a deciphred.
	-Regresa deciphred.

##DIAGRAMA DE FLUJO

[Digrama Cifrado César]["https://github.com/elzbeth/Sprint01-Productos-Finales/tree/master/cifrado-cesar/assets/images/cifrado-cesar.jpg"]