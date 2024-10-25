const board = new Board(12, 6);
const game = new Game(board);

const ukSoldier1 = new Unit('SAS Soldier', 50, 2, 1, 40, 30, 20000, 'infantry', 'uk', 'uk-soldiers.png');    
const argSoldier2 = new Unit('Soldado FA', 50, 2, 3, 40, 30, 20000, 'infantry', 'arg', 'arg-soldados.png');    
const ukSoldier3 = new Unit('Sea Harrier', 50, 4, 1, 40, 30, 20000, 'infantry', 'uk', 'uk-harrier.png');    

board.placeUnit(ukSoldier1, 9, 3);
board.placeUnit(argSoldier2, 2, 4);
board.placeUnit(ukSoldier3, 3, 3);

console.log(argSoldier2);

board.renderBoard('board');
board.currentTeam = 'arg';  

function startGame() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function exitGame() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}