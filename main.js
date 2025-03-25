const board = new Board(32, 20);
const game = new Game(board);

const flag = game.createUnit("Flag");

// UK Initial units
// Creating units
const hmsInvincible = game.createUnit("HMS Invincible");

const seaHarrier = game.createUnit("Sea Harrier");
const nimrodMR2 = game.createUnit("Nimrod MR2");
const avroVulcan = game.createUnit("Avro Vulcan");
const seaKing = game.createUnit("Sea King");

const ukSoldier1 = game.createUnit("SAS Soldier");
const ukSoldier2 = game.createUnit("SAS Soldier");
const ukSoldier3 = game.createUnit("SAS Soldier");
const ukSoldier4 = game.createUnit("SAS Soldier");

// Positioning units near the flag at (24, 8)
board.placeUnit(hmsInvincible, 24, 7);  // Coastal support (close to the flag)

board.placeUnit(seaHarrier, 23, 6);    // Air superiority (close air support)
board.placeUnit(nimrodMR2, 22, 8);     // Recon support (flanking position)
board.placeUnit(avroVulcan, 23, 8);    // Strategic strike (precision attack)
board.placeUnit(seaKing, 25, 9);       // Tactical transport (ready for extraction)

board.placeUnit(ukSoldier3, 20, 8);    // Blockading nearby entry points
board.placeUnit(ukSoldier4, 20, 9);    // Covering retreat paths
board.placeUnit(ukSoldier1, 20, 10);    // Defending the flag
board.placeUnit(ukSoldier2, 20, 11);    // Securing the area


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