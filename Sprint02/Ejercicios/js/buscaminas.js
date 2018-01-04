var board = document.querySelector('.board-js');
var allCells = document.querySelectorAll('td');
var BOMB;
var matrixOrigin = [[1, 1, 1, ''],
                    [1, BOMB, 1, ''],
                    [1, 1, 2, 1],
                    ['', '', 1, BOMB]];
var visitedCells = 0;
var info = document.getElementById('note');
var message = document.getElementById('message');
var again = document.getElementById('restart');

board.addEventListener('click', displayCell);
restart.addEventListener('click',restartGame);
document.body.addEventListener('click',checkTarget);


function displayCell(event) {
  if (event.target.matches('td')) {
    checkVisitedCell(event);
    var value = getCell(event);
    switch (value) {
      case '':
        note.textContent = '';
        message.textContent = '¡Vaya suerte!';
        message.className = 'luck';
        event.target.style.backgroundColor = '#4ecdc4';
        event.target.setAttribute('data-status','visited');
        break;
      case BOMB:
        note.textContent = '¡¡¡BOOOOOOOMMM!!!';
        note.className = 'boom';
        message.textContent = '¡Esto ha explotado!';
        message.className = 'exploted';
        showMatrix(event);
        board.removeEventListener('click', displayCell);
        document.body.removeEventListener('click',checkTarget);
        break;
      default:
        note.textContent = '';
        message.textContent = '¡Uff, eso estuvo cerca!';
        message.className = 'uff';
        event.target.textContent = value;
        event.target.style.color = '#ac16b7';
        event.target.setAttribute('data-status','visited');
    }
    event.stopPropagation();
    checkWinner(event);
  } else {
    checkTarget(event);
  }
}


function checkTarget(event) {
  note.textContent = 'Sigue jugando';
  note.className = 'keep';
  event.stopPropagation();
}


function getCell(event) {
  var row = parseInt(event.target.parentElement.dataset.row) - 1;
  var column = parseInt(event.target.dataset.column) - 1;
  return matrixOrigin[row][column];
}


function checkVisitedCell(event) {

 if (event.target.dataset.status != 'visited')
  visitedCells++;
}


function showMatrix(event) {
  for (var i = 0; i < matrixOrigin.length; i++) {
    for (var j = 0; j < matrixOrigin[i].length; j++) {
      if (matrixOrigin[i][j] == BOMB) {
        allCells[i * 4 + j].style.backgroundColor = '#ffffff';
        allCells[i * 4 + j].className = 'bomb';
      }
    }
  }
}


function checkWinner (event) {
  var bombCells = allCells.length - visitedCells;
  if (bombCells == 2) {
    note.style.color = '#0D6866';
    note.textContent = '¡Ganaste!';
    note.className = 'winner';
    message.textContent = '';
    board.removeEventListener('click',displayCell);
    document.body.removeEventListener('click',checkTarget);
  }
}


function restartGame(event) {
  visitedCells = 0;
  note.textContent = '';
  message.textContent = '';
  for (var i = 0; i < allCells.length; i++) {
    allCells[i].className = '';
    allCells[i].textContent = '';
    allCells[i].style.backgroundColor = '';
    allCells[i].removeAttribute('data-status');
  }
  event.stopPropagation();
  board.addEventListener('click', displayCell);
  document.body.addEventListener('click',checkTarget);
}
