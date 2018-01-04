#SPRINT 01 - PRODUCTO FINAL
## TARJETA DE CRÉDITO VÁLIDA.


-Crear una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

-Consideraciones Específicas:

	-Tu código debe estar compuesto por 1 función: isValidCard.
	-El usuario no debe poder ingresar un campo vacío.


	-Solicitar el número de la tarjeta.
	-Verificar que solo sean números.
		-Advierte sobre el tipo de dato a ingresar.	
	-Asegurarse que sea el número correcto de dígitos.							
		-Advierte de error en el ingreso del número de tarjeta.
	-Crear una variable que regresará la validez de la tarjeta.
	-Crear una variable dónde se guardará la suma para la comprobación del algoritmo.
	-Crear una variable para cantidad de digitos a comprobar.
	-Verificar que los digitos sean par.
	-Evaluar cada digito y pasarlo de string a number cada digito.
	-Si la posición del dígito es par, lo duplicará.
	-Si el digito es menor a 9 el dígito permanecerá igual.
	-Sumar los digitos.
	-Si el módulo 10 de la suma es igual a cero, guarda la variable como verdadera.
	-Si el módulo 10 de la suma es no igual a cero, guarda la variable como falsa.				
	-Muestra en consola si la tarjeta es válida.
	-Regresa si la tarjeta es valida.

##DIAGRAMA DE FLUJO
[Diagrama Tarjeta de crédito válida.]["https://github.com/elzbeth/Sprint01-Productos-Finales/tree/master/tarjeta-de-credito-valida/assets/images/tarjeta-de-credito.jpg"]	
