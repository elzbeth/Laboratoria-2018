document.getElementById('html');


function reservations(){

selection= parseInt(prompt('Por favor ingresa el número de la actividad que deseas realizar: \n 1 : Reservar un lugar. \n 2 : Liberar un lugar.\n 3 : Buscar por documento de identificación.\n -1 : Salir de la aplicación.'))


	var menuFunctions={
		option1: function reserve(){
		passengerInfo={
				name,
				firstSurname,
				secondSurname,
				id
			}
			// passengerInfo.name = prompt('Ingresa tu nombre');
			// passengerInfo.firstSurname = prompt('Ingresa tu primer apellido.');
			// passengerInfo.secondSurname = prompt('Ingresa tu segundo apellido.');
			// passengerInfo.id = prompt('Ingresa el número de tu ID');
			// this.propertyIsEnumerable(personalInfo);
	console.log(passengerInfo);
},

		option2: function liberate(){

			console.log('liberate')
		},

		option3: function search(){

			console.log('search')
		},

		option4: function passengers(){

			console.log('passengers')
		},

		option5: function returnMenu(){

			console.log('returnMenu')},
	}

	console.log(menuFunctions)

if(selection==1){
	menuFunctions.option1();
}
if(selection==2){
	menuFunctions.option1;
	console.log('opcion dos')
}
if(selection==3){
	menuFunctions.option1;
	console.log('opcion tres')
}
if(selection==4){
	menuFunctions.option1;
	console.log('opcion cuatro')
}
if(selection== -1){
	menuFunctions.option1;
	console.log('opcion cinco')
}


}

reservations()
