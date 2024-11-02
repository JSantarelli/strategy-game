const board = new Board(24, 12);
const game = new Game(board);

const flag = game.createUnit("Flag");
const ukSoldier1 = game.createUnit("SAS Soldier");
const ukSoldier2 = game.createUnit("SAS Soldier");
const ukSoldier3 = game.createUnit("SAS Soldier");
const ukSoldier4 = game.createUnit("SAS Soldier");
const ukSoldier5 = game.createUnit("SAS Soldier");
const ukHarrier6 = game.createUnit("Sea Harrier");
const ukHarrier7 = game.createUnit("Sea Harrier");
const ukHarrier8 = game.createUnit("Sea Harrier");
const ukVulcan01 = game.createUnit("Avro Vulcan");
const ukVulcan02 = game.createUnit("Avro Vulcan");
const ukKing01 = game.createUnit("Sea King");
const ukKing02 = game.createUnit("Sea King");
const ukNimrod01 = game.createUnit("Nimrod MR2");
const ukNimrod02 = game.createUnit("Nimrod MR2");
const ukInvincible = game.createUnit("HMS Invincible");

flag.id = "flag01";
flag.team = "uk";
ukSoldier1.id = "uk010";
ukSoldier2.id = "uk011";
ukSoldier3.id = "uk012";

board.placeUnit(flag, 20, 5);
// UK Forces
board.placeUnit(ukSoldier1, 19, 5);
board.placeUnit(ukSoldier2, 18, 4);
board.placeUnit(ukSoldier3, 21, 5);
board.placeUnit(ukSoldier4, 20, 4);
board.placeUnit(ukSoldier5, 15, 6);
board.placeUnit(ukHarrier6, 21, 2);
board.placeUnit(ukHarrier7, 16, 2);
board.placeUnit(ukVulcan01, 12, 9);
board.placeUnit(ukVulcan02, 19, 9);
board.placeUnit(ukKing01, 19, 2);
board.placeUnit(ukKing02, 17, 5);
board.placeUnit(ukNimrod01, 15, 3);
board.placeUnit(ukNimrod02, 21, 5);
board.placeUnit(ukInvincible, 19, 7);

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