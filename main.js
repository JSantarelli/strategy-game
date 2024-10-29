const board = new Board(24, 12);
const game = new Game(board);

const ukSoldier1 = new Unit('uk010', 'SAS Soldier', 50, 2, 1, 40, 30, 70, 20000, 'infantry', 'uk', 'uk-soldiers.png', { columns: 1, rows: 1 });    
const argShip2 = new Unit('uk012', 'HMS Invincible', 50, 2, 3, 40, 30, 70, 20000, 'aircraft carrier', 'uk', 'uk-invincible.png', { columns: 2, rows: 2 });    
const ukSoldier3 = new Unit('uk011', 'Sea Harrier', 50, 4, 1, 40, 30, 70, 20000, 'aircraft', 'uk', 'uk-harrier.png', { columns: 1, rows: 1 });    

board.placeUnit(ukSoldier1, 9, 3);
board.placeUnit(argShip2, 16, 8);
board.placeUnit(ukSoldier3, 3, 3);

board.renderBoard('board');
board.currentTeam = 'arg';  


const modeSelect = document.getElementById('gameMode');
modeSelect.addEventListener('change', selectMode);

let AImode = false;
let PvpMode = false;

function selectMode() {
    let selectedMode = modeSelect.value;
    console
    if (selectedMode === 'PvAI') {
        AImode = true;
    } else {
        PvpMode = true;
    }
}

function startGame() {
    console.log(`AImode: ${AImode}, PvpMode: ${PvpMode}`);
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function exitGame() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}