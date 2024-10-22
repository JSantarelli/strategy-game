    const board = new Board(10, 10); // Ensure this line runs first
    const aircraft1 = new Unit('Fighter A', 30, 3, 2, 100, 5, 'aircraft', 'arg');
    const aircraft2 = new Unit('Fighter B', 25, 2, 3, 80, 3, 'aircraft', 'uk');    
    const aircraft3 = new Unit('Fighter C', 30, 3, 2, 100, 5, 'aircraft', 'arg');
    const aircraft4 = new Unit('Fighter D', 25, 2, 3, 80, 3, 'aircraft', 'uk');    
    board.placeUnit(aircraft1, 8, 2);
    board.placeUnit(aircraft2, 4, 4);
    board.placeUnit(aircraft3, 2, 8);
    board.placeUnit(aircraft4, 6, 6);
    const game = new Game(board);
    board.renderBoard('board'); // Render the board to a container with the ID 'board'    
  