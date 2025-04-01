const board = new Board(32, 20);
const game = new Game(board);

const flag = game.createUnit("Flag");

// const hmsInvincible = game.createUnit("HMS Invincible");
const ukCanberra = game.createUnit("Canberra PR.9");
const ukBroadsword = game.createUnit("HMS Broadsword");
const ukDauntless = game.createUnit("HMS Dauntless");

const ukSoldier1 = game.createUnit("SAS Soldier");
const ukSoldier2 = game.createUnit("SAS Soldier");
const ukSoldier3 = game.createUnit("SAS Soldier");
const ukSoldier4 = game.createUnit("SAS Soldier");

// board.placeUnit(hmsInvincible, 24, 9); 
board.placeUnit(ukCanberra, 18, 5); 
board.placeUnit(ukBroadsword, 24, 11); 
board.placeUnit(ukDauntless, 26, 14); 

board.placeUnit(ukSoldier3, 20, 8);   
board.placeUnit(ukSoldier4, 20, 9);   
board.placeUnit(ukSoldier1, 20, 10);   
board.placeUnit(ukSoldier2, 20, 11);   


flag.id = "flag01";
flag.team = "uk";

board.placeUnit(flag, 24, 8);

board.renderBoard('board');
board.currentTeam = 'arg';  

const modeSelect = document.getElementById('gameMode');
modeSelect.addEventListener('change', selectMode);

let AImode = false;
let PvpMode = false;

function selectMode() {
    let selectedMode = modeSelect.value;
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