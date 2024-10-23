const board = new Board(16, 8);
const game = new Game(board);

game.currentTeam = 'arg';

const argSoldier = new Unit('Soldado FA', 40, 2, 1, 30, 20, 'infantry', 'arg');    
const ukSoldier = new Unit('SAS Soldier', 50, 2, 1, 40, 30, 'infantry', 'uk');    

board.placeUnit(argSoldier, 21, 5);
board.placeUnit(ukSoldier, 20, 5);

board.renderBoard('board'); 
