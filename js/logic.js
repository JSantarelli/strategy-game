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
    const currentTeam = this.currentTeam;
    const enemyTeam = this.currentTeam === 'arg' ? 'uk' : 'arg';
  
    // Check if the enemy team has any remaining units before switching turns
    if (!this.hasRemainingUnits(enemyTeam)) {
      alert(`${currentTeam} wins!`);
      this.gameOver = true;
      return;
    }
  
    // Switch to the next team
    this.currentTeam = enemyTeam;
    this.updateButtonStates();
    document.getElementById('turnIndicator').textContent = `It's now ${this.currentTeam}'s turn.`;
  
    // If it's the AI's turn, make it play automatically
    if (this.currentTeam === 'uk') {
      setTimeout(() =>
      this.performAITurn(), 1000);
    }
  }

  performAITurn() {
    // Get all UK units
    const ukUnits = this.getUnitsByTeam('uk');
    console.log('AI is performing turn with units:', ukUnits);
  
    // Loop through each UK unit to move or attack
    for (const unit of ukUnits) {
      if (!unit.isDestroyed()) {
        // Find the closest enemy unit
        const target = this.findNearestEnemy(unit);
        console.log('Target found for AI:', target);
  
        if (target) {
          const unitPosition = this.board.findUnitPosition(unit);
          const targetPosition = this.board.findUnitPosition(target);
  
          if (unitPosition && targetPosition) {
            const distance = this.board.getDistance(unitPosition.x, unitPosition.y, targetPosition.x, targetPosition.y);
            console.log(`Distance from ${unit.name} to ${target.name}:`, distance);
  
            // If the target is within attack range, attack it
            if (distance <= unit.attackRange) {
              console.log(`AI attacking ${target.name} with ${unit.name}`);
              this.attackUnit(unit, target);
              return; // Stop after the first attack
            }
          }
        }
      }
    }
  
    // Switch back to the player's turn after processing one AI unit
    setTimeout(() => this.switchTurn(), 1000); // Add delay for realism
  }
  

  getUnitsByTeam(team) {
    const units = [];
  
    // Loop through the grid to find all units of the specified team
    for (let y = 0; y < this.board.height; y++) {
      for (let x = 0; x < this.board.width; x++) {
        const unit = this.board.getUnitAt(x, y);
        
        // Logging to check if units are detected
        if (unit) {
          console.log(`Detected unit at (${x}, ${y}):`, unit);
        }
        
        // Check if there's a unit and if it belongs to the specified team
        if (unit && unit.team === team && !unit.isDestroyed()) {
          console.log(`Found ${team} unit at (${x}, ${y})`);
          units.push(unit);
        }
      }
    }
  
    console.log(`All ${team} units found:`, units);
    return units;
  }

  findNearestEnemy(unit) {
    const enemies = this.getUnitsByTeam('arg');
    let closestEnemy = null;
    let shortestDistance = Infinity;
  
    const unitPosition = this.board.findUnitPosition(unit);
  
    // Loop through ARG enemies to find the closest one
    for (const enemy of enemies) {
      if (!enemy.isDestroyed()) {
        const enemyPosition = this.board.findUnitPosition(enemy);
        const distance = this.board.getDistance(unitPosition.x, unitPosition.y, enemyPosition.x, enemyPosition.y);
        
        if (distance < shortestDistance) {
          shortestDistance = distance;
          closestEnemy = enemy;
        }
      }
    }
  
    return closestEnemy;
  }
  
  // Move a unit towards a target position
  moveUnitTowards(unit, target) {
    const unitPosition = this.board.findUnitPosition(unit);
    const targetPosition = this.board.findUnitPosition(target);
    
    if (unitPosition && targetPosition) {
      // Calculate the direction vector
      const dx = targetPosition.x - unitPosition.x;
      const dy = targetPosition.y - unitPosition.y;
      
      // Normalize to get direction (-1, 0, or 1 for both axes)
      const moveX = dx !== 0 ? dx / Math.abs(dx) : 0;
      const moveY = dy !== 0 ? dy / Math.abs(dy) : 0;
      
      // Move unit by one step towards the target
      const newX = unitPosition.x + moveX;
      const newY = unitPosition.y + moveY;
      
      console.log(`Moving ${unit.name} from (${unitPosition.x}, ${unitPosition.y}) to (${newX}, ${newY})`);
      this.board.moveUnit(unit, newX, newY); // Assuming moveUnit method exists
    }
  }

  // Attack target position
  attackUnit(attacker, target) {
    if (!target.isDestroyed()) {
      console.log(`${attacker.name} attacks ${target.name}`);
      target.takeDamage(attacker.attackPower); // Assuming takeDamage reduces health
      if (target.isDestroyed()) {
        console.log(`${target.name} has been destroyed!`);
      } else {
        console.log(`${target.name} has ${target.health} health remaining.`);
      }
    } else {
      console.log(`${target.name} is already destroyed, cannot attack.`);
    }
  }
  
  hasRemainingUnits(team) {
    // Loop through the entire board to check if the specified team's units remain
    for (let y = 0; y < this.board.height; y++) {
      for (let x = 0; x < this.board.width; x++) {
        const unit = this.board.getUnitAt(x, y);
        // If there's an enemy unit that is not destroyed, return true
        if (unit && unit.team === team && !unit.isDestroyed()) {
          return true;
        }
      }
    }
    return false;
  }  

}
