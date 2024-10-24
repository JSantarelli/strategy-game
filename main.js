
    const board = new Board(12, 6);
    const game = new Game(board);

    const ukSoldier1 = new Unit('SAS Soldier', 50, 2, 1, 40, 30, 20000, 'infantry', 'uk', 'uk-soldiers.png');    
    const ukSoldier2 = new Unit('Sea King', 50, 2, 3, 40, 30, 20000, 'aircraft', 'uk', 'uk-sea-king.png');    
    const ukSoldier3 = new Unit('Sea Harrier', 50, 4, 1, 40, 30, 20000, 'infantry', 'uk', 'uk-harrier.png');    
    
    board.placeUnit(ukSoldier1, 9, 3);
    board.placeUnit(ukSoldier2, 2, 4);
    board.placeUnit(ukSoldier3, 3, 3);
    
    board.renderBoard('board');
    board.currentTeam = 'arg';
 