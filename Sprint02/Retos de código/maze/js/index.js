window.onload = function() {
    maze = document.getElementById('maze');
    mazec = maze.getContext('2d');
    start();
    document.addEventListener("keydown", keyPush);
    document.getElementsByTagName('input')[0].addEventListener("input", newGame);
}

function start() {
    Difficulty = [10, 20, 50, 100];
    move = null;
    end = false;
    d = Difficulty[document.getElementsByTagName('input')[0].value];
    cols = maze.width / d;
    rows = maze.height / d;
    cells = [];
    stack = [];
    for (var x = 0; x < cols; ++x) {
        for (var y = 0; y < rows; ++y) {
            cells.push(new Cell(x, y));
        }
    }
    current = cells[cells.length - 1];
    while (buildMaze()) {}
    current = cells[cells.length - 1];
    startPoint = cells[cells.length - 1];
    endPoint = cells[0];
    path = [startPoint];
    DrawMaze();
}

function newGame() {
    d = Difficulty[document.getElementsByTagName('input')[0].value];
    move = null;
    end = false;
    resetCells();
    current = cells[cells.length - 1];
    while (buildMaze()) {}
    current = cells[cells.length - 1];
    startPoint = cells[cells.length - 1];
    endPoint = cells[0];
    path = [startPoint];
    DrawMaze();
}

function resetCells() {
    for (var i = 0; i < cells.length; ++i) {
        delete cells[i];
    }

    cols = maze.width / d;
    rows = maze.height / d;
    cells = [];
    stack = [];
    for (var x = 0; x < cols; ++x) {
        for (var y = 0; y < rows; ++y) {
            cells.push(new Cell(x, y));
        }
    }
}

function buildMaze() {
    current.visited = true;
    next = current.checkNeighbours();
    if (next) {
        stack.push(next);
        removeWalls(current, next);
        current = next;
    } else {
        if (stack.length > 0) {
            current = stack.pop();
        } else {
            return 0;
        }
    }
    return 1;
}

function DrawMaze() {
    mazec.fillStyle = '#00b85c';
    mazec.fillRect(0, 0, maze.width, maze.height);

    for (var x = 0; x < rows; ++x) {
        for (var y = 0; y < cols; ++y) {
            cells[x * cols + y].show();
        }
    }

    mazec.beginPath();
    mazec.strokeStyle = "#294ad8";
    mazec.lineWidth = d / 4;
    mazec.moveTo(startPoint.x + d / 2, startPoint.y + d / 2);
    for (var i = 0; i < path.length; ++i) {
        mazec.lineTo(path[i].x + d / 2, path[i].y + d / 2);
    }
    mazec.stroke();

    mazec.beginPath();
    mazec.lineWidth = 1;
    mazec.arc(startPoint.x + d / 2, startPoint.y + d / 2, d / 4, 0, 2 * Math.PI);
    mazec.fillStyle = "#dacf20";
    mazec.fill();

    mazec.beginPath();
    mazec.arc(endPoint.x + d / 2, endPoint.y + d / 2, d / 4, 0, 2 * Math.PI);
    mazec.fillStyle = "#0c6834";
    mazec.fill();

    mazec.beginPath();
    mazec.fillStyle = "#9a1317";
    mazec.arc(current.x + d / 2, current.y + d / 2, d / 4, 0, 2 * Math.PI);
    mazec.fill();
}

function index(x, y) {
    if (x < 0 || y < 0 || x >= cols * d || y >= rows * d) {
        return -1;
    }
    return (y + x * rows) / d;
}

function Cell(x, y) {
    this.x = x * d;
    this.y = y * d;
    this.walls = [true, true, true, true]; // top -> right -> bottom -> left
    this.visited = false;

    this.show = function() {
        mazec.strokeStyle = "#003b48";
        if (this.walls[0]) { // top
            DLine(this.x, this.y, this.x + d, this.y);
        }
        if (this.walls[1]) { // right
            DLine(this.x + d, this.y, this.x + d, this.y + d);
        }
        if (this.walls[2]) { // bottom
            DLine(this.x + d, this.y + d, this.x, this.y + d);
        }
        if (this.walls[3]) { // left
            DLine(this.x, this.y + d, this.x, this.y);
        }
    }

    this.Neighbours = function() {
        var num = [];

        if (!this.walls[0]) {
            num.push(cells[index(this.x, this.y - d)]);
        }
        if (!this.walls[1]) {
            num.push(cells[index(this.x + d, this.y)]);
        }
        if (!this.walls[2]) {
            num.push(cells[index(this.x, this.y + d)]);
        }
        if (!this.walls[3]) {
            num.push(cells[index(this.x - d, this.y)]);
        }
        return num;
    }

    this.checkNeighbours = function() {
        var temp = [];
        var top = cells[index(this.x, this.y - d)];
        var right = cells[index(this.x + d, this.y)];
        var bottom = cells[index(this.x, this.y + d)];
        var left = cells[index(this.x - d, this.y)];

        if (top && !top.visited) {
            temp.push(top);
        }
        if (right && !right.visited) {
            temp.push(right);
        }
        if (bottom && !bottom.visited) {
            temp.push(bottom);
        }
        if (left && !left.visited) {
            temp.push(left);
        }
        if (temp.length > 0) {
            return temp[Math.floor(Math.random() * temp.length)];
        }
        return undefined;
    }
}

function removeWalls(a, b) {
    if (a.x > b.x) {
        a.walls[3] = b.walls[1] = false;
    } else if (a.x < b.x) {
        a.walls[1] = b.walls[3] = false;
    } else if (a.y > b.y) {
        a.walls[0] = b.walls[2] = false;
    } else if (a.y < b.y) {
        a.walls[2] = b.walls[0] = false;
    }
}

function DLine(x1, y1, x2, y2) {
    mazec.lineWidth = 3;
    mazec.beginPath();
    mazec.moveTo(x1, y1);
    mazec.lineTo(x2, y2);
    mazec.stroke();
}

function CheckPath(dirc) {
    if (!current.walls[dirc]) {
        var newCell;
        switch (dirc) {
            case 0: // top
                newCell = cells[index(current.x, current.y - d)];
                break;
            case 1: //right
                newCell = cells[index(current.x + d, current.y)];
                break;
            case 2: // bottom
                newCell = cells[index(current.x, current.y + d)];
                break;
            case 3: //left
                newCell = cells[index(current.x - d, current.y)];
                break;
        }
        keepMoving(newCell == path[path.length - 2], newCell);

    }
    return;
}

function keepMoving(dirc, n) {
    if (dirc) {
        move = setInterval(function() {
            if (!(path[path.length - 2] && path[path.length - 2].Neighbours().length < 3)) {
                if (path[path.length - 2]) {
                    current = path[path.length - 2];
                    path.pop();
                }
                clearInterval(move);
                move = null;
            } else {
                current = path[path.length - 2];
                path.pop();
            }
            DrawMaze();
        }, 100);

    } else {
        current = n;
        path.push(current);
        move = setInterval(function() {
            DrawMaze();
            if (!(current != endPoint && current.Neighbours().length < 3)) {
                clearInterval(move);
                move = null;
                if (current == endPoint) {
                    win();
                }
            } else {
                if (current.Neighbours().length == 1) {
                    clearInterval(move);
                    move = null;
                } else {
                    current = (current.Neighbours()[0] == path[path.length - 2]) ? current.Neighbours()[1] : current.Neighbours()[0];
                    path.push(current);
                }
            }
        }, 100);

    }
}

function win() {
    end = true;
    mazec.font = "50px Arial";
    mazec.textAlign = "center";
    mazec.fillStyle = 'white';
    mazec.fillText("Good job", maze.width / 2, maze.height / 2);
    mazec.font = "20px Arial";
    mazec.fillText("Press Space to play again", maze.width / 2, maze.height / 2 + 50);
}

function keyPush(e) {
    if (move) {
        return;
    }
    if (e.keyCode == 38) { // top
        CheckPath(0);
    } else if (e.keyCode == 39) { // right
        CheckPath(1);
    } else if (e.keyCode == 40) { // bottom
        CheckPath(2);
    } else if (e.keyCode == 37) { // left
        CheckPath(3);
    } else if (e.keyCode == 32) { // Space
        if (end) {
            newGame();
        }
    }
}