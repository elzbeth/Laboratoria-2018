var turn = 1;
var turnNumber;
var tictactoe = new Array(9);
var cells = document.getElementsByClassName("board-cell");




function winnerPlayer(mark){
	 if(
	 	(tictactoe[0] == mark && tictactoe[1] == mark && tictactoe[2] == mark) ||
	 	(tictactoe[3] == mark && tictactoe[4] == mark && tictactoe[5] == mark) ||
	 	(tictactoe[6] == mark && tictactoe[7] == mark && tictactoe[8] == mark) ||
	 	(tictactoe[0] == mark && tictactoe[3] == mark && tictactoe[6] == mark) ||
	 	(tictactoe[1] == mark && tictactoe[4] == mark && tictactoe[7] == mark) ||
	 	(tictactoe[2] == mark && tictactoe[5] == mark && tictactoe[8] == mark) ||
	 	(tictactoe[0] == mark && tictactoe[4] == mark && tictactoe[8] == mark) ||
	 	(tictactoe[2] == mark && tictactoe[4] == mark && tictactoe[6] == mark) )

	 	{
	 		alert("¡" + mark + " ha ganado!");
}
                       
}

function ttt(e){
	var cell = e.target;
	var cellId = e.target.id;
	var position = cellId[5]-1;
	var cellStatus = e.target.dataset.status;


turnNumber = turn % 2

		if(turnNumber != 0){
			 if(cell.innerHTML == "X" || cell.innerHTML == "O"){
			 	alert('ocupada');
			 	turn--;

			 }else{
			cell.innerHTML = "X";
			cell.style.background = "#000";
			cell.style.color = "#fff";
			cellStatus = 'occupied';
			tictactoe[position] ="X";
			winnerPlayer("X");
}
			
		}else if(turnNumber == 0){
			 if(cell.innerHTML == "X" || cell.innerHTML == "O"){
			 	alert('ocupada');
			 	turn--;
                                                        
			 }else{
			cell.innerHTML = "O";
			cell.style.background = "#fff";
			cell.style.color = "#000";
			tictactoe[position] ="O"; 
			cellStatus='occupied';
			winnerPlayer("O");
		
	 }

}

if(turn >= 9){
	alert('Empate');
	var playAgain = confirm('¿Quieres jugar de nuevo?');
	if(playAgain){
		window.location.reload();
	}else{
		alert('Hasta pronto.')
	}

}else {

turn ++;
}
}

function loadingDocument(){
	var n = 0;

	while (n < cells.length){
	 cells[n].addEventListener("click",ttt);
	 n++;
	}
}

window.addEventListener("load",loadingDocument);