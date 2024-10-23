    const board = new Board(12, 6);
    const aircraft2 = new Unit('Fighter B', 25, 2, 3, 80, 3, 'aircraft', 'uk');    
    const aircraft4 = new Unit('Fighter D', 25, 2, 3, 80, 3, 'aircraft', 'uk');    
    board.placeUnit(aircraft2, 8, 2);
    board.placeUnit(aircraft4, 8, 3);
    const game = new Game(board);
    board.renderBoard('board'); 
  