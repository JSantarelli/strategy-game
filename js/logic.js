class Game {
  constructor(board) {
    this.board = board;
    this.selectedUnit = null;
    this.unitToAdd = null;
    this.currentTeam = 'arg'; 

    this.moveButton = document.getElementById('moveButton');
    this.attackButton = document.getElementById('attackButton');

    this.moveButton.addEventListener('click', () => this.handleMove());
    this.attackButton.addEventListener('click', () => this.handleAttack());
    this.updateButtonStates();
  }

  enableAddMode(unitType) {
    this.addMode = true;
    this.unitToAdd = this.createUnit(unitType);
  }

  disableAddMode() {
    this.addMode = false;
    this.unitToAdd = null;
  }

  createUnit(unitType) {
    const unitConfig = availableUnits.find(unit => unit.name === unitType);
    
    if (unitConfig) {
      return new Unit(unitConfig);  // Pass the entire config object to Unit
    }
    return null;
  }

  selectUnit(unit) {
    if (unit.isDestroyed() || unit.team !== this.currentTeam) return;
    
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

  updateButtonStates() {
    const isCurrentTeam = this.selectedUnit && this.selectedUnit.team === this.currentTeam;

    if (isCurrentTeam) {
      this.moveButton.disabled = false;

      const target = this.findTarget();
      this.attackButton.disabled = !target;
    } else {
      this.moveButton.disabled = true;
      this.attackButton.disabled = true;
    }
  }

  handleMove() {
    alert('Select a cell to move to.');
    this.moveButton.disabled = true;
  }

  handleAttack() {
    if (this.selectedUnit) {
      const target = this.findTarget();
      if (target) {
        this.attackSelectedUnit(target);
      }
    }
    this.attackButton.disabled = true;
  }

  getUnitElement(unit) {
    return document.getElementById(`unit-${unit.id}`);
  }

  moveSelectedUnit(x, y) {
    if (this.selectedUnit && this.selectedUnit.state === 'selected') {
      const { x: currentX, y: currentY } = this.board.findUnitPosition(this.selectedUnit);
      const distance = this.board.getDistance(currentX, currentY, x, y);
  
      if (distance <= this.selectedUnit.displacement) {
        const unitElement = this.getUnitElement(this.selectedUnit);
        if (unitElement) {
          unitElement.classList.add('fade-in');
  
          setTimeout(() => {
            this.board.moveUnit(this.selectedUnit, x, y);
            this.selectedUnit.state = 'idle';
            this.selectedUnit = null;
            this.board.renderBoard('board');
            this.updateButtonStates();
            this.switchTurn();
          }, 1000);
        }
      }
    }
  }  
  
  findTarget() {
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
      this.selectedUnit.team !== target.team
      ) {
      const { x: originX, y: originY } = this.board.findUnitPosition(this.selectedUnit);
      const { x: targetX, y: targetY } = this.board.findUnitPosition(target);
      const distance = this.board.getDistance(originX, originY, targetX, targetY);

      if (distance <= this.selectedUnit.fireScope) {
        if (target.type === 'building') {
          target.changeTeam();
          target.onAttacked(this.selectedUnit);
          console.log(`Building ${target.name} has been taken over by ${this.selectedUnit.team}`);
        } else {
        target.takeDamage(this.selectedUnit.firePower);
      }
        this.selectedUnit.state = 'idle';
        this.selectedUnit = null;
        this.board.renderBoard('board');
        this.switchTurn();
      }
    }
  }

  switchTurn() {
    const currentTeam = this.currentTeam;
    const enemyTeam = this.currentTeam === 'arg' ? 'uk' : 'arg';
  
    if (!this.hasRemainingUnits(enemyTeam)) {
      alert(`${currentTeam} wins!`);
      this.gameOver = true;
      return;
    }
  
    this.currentTeam = enemyTeam;
    this.updateButtonStates();
    document.getElementById('turnIndicator').textContent = `It's now ${this.currentTeam}'s turn.`;
  
    if (this.currentTeam === 'uk' && AImode) {
      setTimeout(() =>
      this.performAITurn(), 1000);
    }
  }

  performAITurn() {
    const ukUnits = this.getUnitsByTeam('uk');
    console.log('AI is performing turn with units:', ukUnits);
  
      for (const unit of ukUnits) {
        if (!unit.isDestroyed()) {
          const target = this.findNearestEnemy(unit);
          console.log('Target found for AI:', target);
    
          if (target) {
            const unitPosition = this.board.findUnitPosition(unit);
            const targetPosition = this.board.findUnitPosition(target);
    
            if (unitPosition && targetPosition) {
              const distance = this.board.getDistance(unitPosition.x, unitPosition.y, targetPosition.x, targetPosition.y);
              console.log(`Distance from ${unit.name} to ${target.name}:`, distance);

              if (distance <= unit.fireScope) {
                console.log(`AI attacking ${target.name} with ${unit.name}`);
                this.attackUnit(unit, target);
                this.switchTurn();
                return;
              } else {
              this.moveUnitTowards(unit, target);
              this.switchTurn();
              return;
            }
          }
        }
      }
      this.switchTurn(); 
    }  
  }
  
  getUnitsByTeam(team) {
    const units = [];
  
    for (let y = 0; y < this.board.height; y++) {
      for (let x = 0; x < this.board.width; x++) {
        const unit = this.board.getUnitAt(x, y);
        
        if (unit) {
          console.log(`Detected unit at (${x}, ${y}):`, unit);
        }
        
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
      const dx = targetPosition.x - unitPosition.x;
      const dy = targetPosition.y - unitPosition.y;
  
      const moveX = dx !== 0 ? dx / Math.abs(dx) : 0;
      const moveY = dy !== 0 ? dy / Math.abs(dy) : 0;
  
      const newX = unitPosition.x + moveX;
      const newY = unitPosition.y + moveY;
  
      const unitElement = this.getUnitElement(unit);
      if (unitElement) {
        unitElement.classList.add('fade-out'); // Start fade-out effect
  
        setTimeout(() => {
          this.board.moveUnit(unit, newX, newY); // Move the unit in the grid
          this.board.renderBoard('board'); // Re-render the board
  
          // Re-add fade-in effect after the move
          const movedUnitElement = this.getUnitElement(unit);
          if (movedUnitElement) {
            movedUnitElement.classList.remove('fade-out');
            movedUnitElement.classList.add('fade-in');
  
            setTimeout(() => {
              movedUnitElement.classList.remove('fade-in');
            }, 500); // Match the duration of the CSS transition
          }
        }, 500); // Match the duration of fade-out
      }
    }
  }
  
  // Attack target position
  attackUnit(attacker, target) {
    if (!target.isDestroyed()) {
      console.log(`${attacker.name} attacks ${target.name}`);
      target.takeDamage(attacker.firePower);
      if (target.isDestroyed()) {
        console.log(`${target.name} has been destroyed!`);
      } else {
        console.log(`${target.name} has ${target.stamina} health remaining.`);
      }
    } else {
      console.log(`${target.name} is already destroyed, cannot attack.`);
    }
    this.board.renderBoard('board');
  }
  
  hasRemainingUnits(team) {
    for (let y = 0; y < this.board.height; y++) {
      for (let x = 0; x < this.board.width; x++) {
        const unit = this.board.getUnitAt(x, y);
        if (unit && unit.team === team && !unit.isDestroyed()) {
          return true;
        }
      }
    }
    return false;
  }  
}
