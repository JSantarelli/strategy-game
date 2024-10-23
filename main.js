
    const board = new Board(12, 6);
    const game = new Game(board);

    const ukSoldier = new Unit('SAS Soldier', 50, 2, 1, 40, 30, 20000, 'infantry', 'uk', 'uk-soldiers.png');    
    
    board.placeUnit(ukSoldier, 9, 3);
    
    board.renderBoard('board');
    board.currentTeam = 'arg';
 