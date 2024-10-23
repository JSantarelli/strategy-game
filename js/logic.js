class Game {
  constructor(board) {
    this.board = board;
    this.selectedUnit = null;
    this.unitToAdd = null;
    this.currentTeam = 'arg'; 

    // Get references to the buttons
    this.moveButton = document.getElementById('moveButton');
    this.attackButton = document.getElementById('attackButton');

    // Add event listeners to buttons
    this.moveButton.addEventListener('click', () => this.handleMove());
    this.attackButton.addEventListener('click', () => this.handleAttack());

    this.updateButtonStates(); // Update buttons on initialization
  }

  enableAddMode(unitType) {
    this.addMode = true;
    this.unitToAdd = this.createUnit(unitType); // Create the unit object when mode is enabled
  }

  disableAddMode() {
    this.addMode = false;
    this.unitToAdd = null;
  }

  createUnit(unitType) {
    const unitConfig = availableUnits.find(unit => unit.name === unitType);
  
    if (unitConfig) {
      return new Unit(
        unitConfig.name,
        unitConfig.firePower,
        unitConfig.fireScope,
        unitConfig.displacement,
        unitConfig.stamina,
        unitConfig.shield,
        unitConfig.cost,
        unitConfig.type,
        unitConfig.team,
        unitConfig.imgPath
      );
    }
      return null;
  }

  selectUnit(unit) {
    // Only allow selection if the unit belongs to the current team
    if (unit.isDestroyed() || unit.team !== this.currentTeam) return;
    console.log('selected!')

    if (this.selectedUnit === unit) {
      this.selectedUnit.state = 'idle';
      this.selectedUnit = null;
    } else {
      if (this.selectedUnit) {
        this.selectedUnit.state = 'idle';
      }
      this.selectedUnit = unit;
      this.selectedUnit.state = 'selected';
    }
    this.updateButtonStates();
  }

  // Method to add a new unit to the board
  placeUnitOnBoard(event) {
    if (!this.selectedUnitType) return; // No unit type selected

    // Assuming you have a way to get the clicked cell's coordinates
    const { x, y } = this.board.getCoordinatesFromClick(event);

    // Check if the cell is empty before placing
    if (!this.board.getUnitAt(x, y)) {
      // Create a new instance of the selected unit type
      const newUnit = new Unit(
        this.selectedUnitType.name,
        this.selectedUnitType.firePower,
        this.selectedUnitType.fireScope,
        this.selectedUnitType.displacement,
        this.selectedUnitType.stamina,
        this.selectedUnitType.shield,
        this.selectedUnitType.cost,
        this.selectedUnitType.type,
        this.selectedUnitType.team,
        this.selectedUnitType.imgPath
      );

      // Place the unit and reset selection
      this.board.placeUnit(newUnit, x, y);
      this.board.renderBoard('board');
      this.selectedUnitType = null;
      this.switchTurn();
    } else {
      alert('That cell is already occupied.');
    }
  }

  updateButtonStates() {
    const isCurrentTeam = this.selectedUnit && this.selectedUnit.team === this.currentTeam;

    // Enable buttons based on the current team
    if (isCurrentTeam) {
      this.moveButton.disabled = false;

      // Enable attack button only if there's a target within range
      const target = this.findTarget();
      this.attackButton.disabled = !target;
    } else {
      this.moveButton.disabled = true;
      this.attackButton.disabled = true;
    }
  }

  handleMove() {
    alert('Select a cell to move to.');
    // Disable the move button until a move is performed.
    this.moveButton.disabled = true;
  }

  handleAttack() {
    if (this.selectedUnit) {
      const target = this.findTarget();
      if (target) {
        this.attackSelectedUnit(target);
      }
    }
    // Disable the attack button after the action.
    this.attackButton.disabled = true;
  }

  moveSelectedUnit(x, y) {
    if (this.selectedUnit && this.selectedUnit.state === 'selected') {
      const { x: currentX, y: currentY } = this.board.findUnitPosition(this.selectedUnit);
      const distance = this.board.getDistance(currentX, currentY, x, y);

      if (distance <= this.selectedUnit.displacement) {
        this.board.moveUnit(this.selectedUnit, x, y);
        this.selectedUnit.state = 'idle';
        this.selectedUnit = null;
        this.board.renderBoard('board'); // Re-render the board after changes.
        this.updateButtonStates(); // Update button states after moving.

        // Switch turn after a move
        this.switchTurn();
      }
    }
  }

  findTarget() {
    // Find the closest target within range for the selected unit.
    if (!this.selectedUnit) return null;

    const { x: originX, y: originY } = this.board.findUnitPosition(this.selectedUnit);
    for (let y = 0; y < this.board.height; y++) {
      for (let x = 0; x < this.board.width; x++) {
        const unit = this.board.getUnitAt(x, y);
        if (unit && unit !== this.selectedUnit && !unit.isDestroyed()) {
          const distance = this.board.getDistance(originX, originY, x, y);
          if (distance <= this.selectedUnit.fireScope) {
            return unit;
          }
        }
      }
    }
    return null;
  }

  attackSelectedUnit(target) {
    if (
      this.selectedUnit &&
      this.selectedUnit.state === 'selected' &&
      !target.isDestroyed() &&
      this.selectedUnit.team !== target.team // Prevent attacking own team
    ) {
      const { x: originX, y: originY } = this.board.findUnitPosition(this.selectedUnit);
      const { x: targetX, y: targetY } = this.board.findUnitPosition(target);
      const distance = this.board.getDistance(originX, originY, targetX, targetY);

      if (distance <= this.selectedUnit.fireScope) {
        target.takeDamage(this.selectedUnit.firePower);
        this.selectedUnit.state = 'idle';
        this.selectedUnit = null;

        // Re-render the board after the attack
        this.board.renderBoard('board');

        // Switch turn after an attack
        this.switchTurn();
      }
    }
  }

  switchTurn() {
    this.currentTeam = this.currentTeam === 'arg' ? 'uk' : 'arg';
    this.updateButtonStates(); // Update button states after switching turns
    document.getElementById('turnIndicator').textContent = `It's now ${this.currentTeam}'s turn.`;
  }

  endTurn() {
    const victoryMessage = this.checkVictoryConditions();
    if (victoryMessage) {
      alert(victoryMessage); // Or handle game-over state in UI
      // Additional code to reset or end the game
    } else {
      this.switchTurn();
    }
  }

  // Method to check for victory conditions
  checkVictoryConditions() {
    const opponent = this.currentPlayer === 'arg' ? 'uk' : 'arg';

    // a. Check if the opponent has any units left on land cells
    if (!this.hasUnitsOnLand(opponent)) {
      console.log(`${this.currentPlayer.toUpperCase()} wins! No opponent's units on land.`);
      return `${this.currentPlayer.toUpperCase()} wins!`;
    }

    // b. Check if all enemy units are destroyed
    if (!this.hasRemainingUnits(opponent)) {
      console.log(`${this.currentPlayer.toUpperCase()} wins! All enemy units are destroyed.`);
      return `${this.currentPlayer.toUpperCase()} wins!`;
    }

    // No victory yet
    return null;
  }

  // Helper method to check if any opponent's units are on land
  hasUnitsOnLand(team) {
    for (let y = 0; y < this.board.height; y++) {
      for (let x = 0; x < this.board.width; x++) {
        const unit = this.board.getUnitAt(x, y);
        const terrainType = this.board.getTerrainAt(x, y);
        if (unit && unit.team === team && terrainType === 'land') {
          return true; // Opponent has units on land
        }
      }
    }
    return false;
  }

  // Helper method to check if any units of the opponent remain
  hasRemainingUnits(team) {
    return this.board.getUnitsByTeam(team).length > 0;
  }

}
