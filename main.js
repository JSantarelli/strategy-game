const board = new Board(24, 12);
const game = new Game(board);

const ukSoldier1 = new Unit('uk010', 'SAS Soldier', 50, 2, 1, 40, 30, 70, 20000, 'infantry', 'uk', 'uk-soldiers.png', { columns: 1, rows: 1 });    
const ukSoldier2 = new Unit('uk011', 'SAS Soldier', 50, 4, 1, 40, 30, 70, 20000, 'infantry', 'uk', 'uk-soldiers.png', { columns: 1, rows: 1 });    
const ukSoldier3 = new Unit('uk012', 'SAS Soldier', 50, 4, 1, 40, 30, 70, 20000, 'infantry', 'uk', 'uk-soldiers.png', { columns: 1, rows: 1 });    
const ukHarrier4 = new Unit('uk013', 'Sea Harrier', 80, 7, 6, 40, 30, 70, 20000, 'aircraft', 'uk', 'uk-harrier.png', { columns: 1, rows: 1 });    
const ukShip = new Unit('uk014', 'HMS Invincible', 50, 2, 3, 40, 30, 70, 20000, 'aircraft carrier', 'uk', 'uk-invincible.png', { columns: 2, rows: 2 });    
// const argShip = new Unit('arg05', 'ARA 25 de Mayo', 30, 7, 2, 180, 20, 100, 6000000, 'aircraft carrier', 'arg', 'arg-ara-25.png', { columns: 2, rows: 2 });    

const flag = new Building('flag', 'building', 'uk', 'uk-flag.png', { columns: 1, rows: 1 });

board.placeUnit(flag, 20, 5);
board.placeUnit(ukSoldier1, 19, 5);
board.placeUnit(ukSoldier2, 21, 5);
board.placeUnit(ukSoldier3, 20, 4);
board.placeUnit(ukShip, 16, 8);
// board.placeUnit(argShip, 3, 11);
board.placeUnit(ukHarrier4, 16, 3);

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