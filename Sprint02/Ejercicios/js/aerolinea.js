var airlineSeats = [
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false,
	false
];

var occupiedSeats = 0;

var paintSeats = function(array){
	var containerSeats = document.getElementById("seats");

	for(var i = 0; i < array.length; i++){
		var seat = document.createElement('div');
		seat.className = 'seats';

		if(i < 4){
			seat.style.background = 'coral';
		}else{
			seat.style.background = 'teal';
		}
		containerSeats.appendChild(seat);
	}
};


var reserve = function() {
	var btn = document.getElementById('btn');
	btn.addEventListener('click',chooseZone);
};


var checkFirstClassZone = function(){
	var zone = 'Primera Clase';
	for(var index = 0; index < 4; index++){
		if(airlineSeats[index] == false){
			airlineSeats[index] = true;
			reservedSeat(index);
			paintTicket(index,zone);
			occupiedSeats++;
			break;
		}else if(index == 3 && airlineSeats[index] == true){
			reassignEconomicZone(zone);
		}
	}console.log(occupiedSeats);
};

var checkEconomicZone = function(){
	var zone = 'Clase Económica';

	for(var index = 4; index < 10; index++){
		if(airlineSeats[index] == false){
			airlineSeats[index] = true;
			reservedSeat(index);
			paintTicket(index,zone);
			occupiedSeats++;
			break;
		}else if(index == 9 && airlineSeats[index] == true){
			reassignFirstClassZone(zone);
		}
	}console.log(occupiedSeats);
};


var reservedSeat =function(indexToPaint){

	var seat = document.getElementsByClassName('seats');
	seat[indexToPaint].textContent = 'Ocupado';

};



var reassignEconomicZone = function(zone){
	var reasign = confirm('Los asientos disponibles de esta zona se han agotado.\n ¿Deseas reservar en zona Económica?');

	if(reasign = true && occupiedSeats < 10){
		checkEconomicZone();

	}else{
		nextFlight();
	}
};


var reassignFirstClassZone = function(zone){
	var reasign = confirm('Los asientos disponibles de esta zona se han agotado.\n ¿Deseas reservar en zona Primera Clase?');

	if(reasign = true && occupiedSeats < 10){
		checkFirstClassZone();
	}else{
	    nextFlight();
	}
};


var paintTicket = function(index, zone){
	var containerTickets = document.getElementById('tickets');
	var ticket = document.createElement('div')
	ticket.style.background='orange';
	ticket.className = 'ticket'
	var title = document.createElement('h4')
	var reservedSeating = document.createElement('p')
	var zoneClass = document.createElement('p')

	title.textContent = 'PASE DE ABORDAR'
	reservedSeating.textContent = 'Número de asiento ' + (index + 1)
	zoneClass.textContent = zone;
	ticket.appendChild(title);
	ticket.appendChild(reservedSeating);
	ticket.appendChild(zoneClass);

	containerTickets.appendChild(ticket);
	console.log(ticket);
};

var nextFlight = function(){
	alert('Lo sentimos.\nEste vuelo está completo.\nNuestro próximo vuelo sale en 3 horas.\n\nGracias por tu preferencia.');
};



var chooseZone = function(){
	var choice = prompt('¿En qué zona prfeieres reservar?\n 1.- Primera Clase.\n 2.- Clase Económica. \n\n Por favor ingresa la opción de tu preferencia.');
	if(choice == 1){
		checkFirstClassZone();
	}else if (choice == 2){
		checkEconomicZone();
	}else{
		alert('Por favor ingresa una opción válida.')
	}
};


paintSeats(airlineSeats);
reserve();
