(function interceptConsole() {
  const logList = document.getElementById('gameLogList');

  function appendToLog(type, args) {
    const item = document.createElement('li');
    item.className = `log-${type}`; // lets your CSS style .log-log vs .log-warn
    item.textContent = args.map(a =>
      typeof a === 'object' ? JSON.stringify(a) : String(a)
    ).join(' ');
    logList.prepend(item); // newest entry on top
  }

  const _log  = console.log.bind(console);
  const _warn = console.warn.bind(console);

  console.log = (...args) => { _log(...args);  appendToLog('log',  args); };
  console.warn = (...args) => { _warn(...args); appendToLog('warn', args); };
})();

const board = new Board(32, 20);
const game = new Game(board);
 
const flag = game.createUnit("Flag");

const hmsInvincible = game.createUnit("HMS Invincible");
const ukBroadsword = game.createUnit("HMS Broadsword");
const ukDauntless = game.createUnit("HMS Dauntless");

const ukCanberra = game.createUnit("Canberra PR.9");
const ukHarrier = game.createUnit("Harrier GR.3");
const ukSeaKing = game.createUnit("Westland Sea King");

const ukSoldier1 = game.createUnit("SAS Soldier");
const ukSoldier2 = game.createUnit("SAS Soldier");
const ukSoldier3 = game.createUnit("SAS Soldier");
const ukSoldier4 = game.createUnit("SAS Soldier");

const ukRapier = game.createUnit("Rapier SAM");
const ukBofors = game.createUnit("Bofors 40mm");

const ukScorpion = game.createUnit("FV101 Scorpion");
const ukScimitar = game.createUnit("FV107 Scimitar");

board.placeUnit(hmsInvincible, 28, 9); 
board.placeUnit(ukCanberra, 18, 5); 
board.placeUnit(ukBroadsword, 24, 11); 
board.placeUnit(ukDauntless, 26, 14); 
board.placeUnit(ukHarrier, 14, 3); 
board.placeUnit(ukRapier, 19, 7);
board.placeUnit(ukBofors, 19, 9);
board.placeUnit(ukSeaKing, 19, 3);
board.placeUnit(ukSoldier3, 20, 8);   
board.placeUnit(ukSoldier4, 20, 9);   
board.placeUnit(ukSoldier1, 20, 10);   
board.placeUnit(ukSoldier2, 20, 11);   
board.placeUnit(ukScorpion, 18, 11);   
board.placeUnit(ukScimitar, 17, 11);   

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
    // console.log(`AImode: ${AImode}, PvpMode: ${PvpMode}`);
    document.getElementById('home').style.display = 'none';
    document.getElementById('game').style.display = 'block';
}

function exitGame() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}