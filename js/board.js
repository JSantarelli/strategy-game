const predefinedGrid = [
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'water', 'land', 'land', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water'],
  ['water', 'water', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'land', 'water', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water']
];

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = this.createGrid();
    this.currentTeam = 'uk'; 
    this.budget = {
      uk: 300000000, 
      arg: 2500000000 
    };
    this.budgetIndicator = this.showBudget();
  }

  createGrid() {
    return predefinedGrid.map(row => 
      row.map(cell => ({
        unit: null,
        terrain: cell                    
      }))
    );
  }

  showBudget() {
    document.getElementById('argBudget').textContent = `Initial budget: ${this.budget[this.currentTeam]}`;
    document.getElementById('ukBudget').textContent = `Initial budget: ${this.budget[this.currentTeam]}`;
  }

  placeUnit(unit, x, y) {
    console.log('Current Team at start:', this.currentTeam);

    if (this.isWithinBounds(x, y)) {
      const cell = this.grid[y][x];
      if (this.isUnitTeam(unit)) {
        if (this.canAffordUnit(unit)) {
          if (this.isTerrainCompatible(unit, cell.terrain)) {
            cell.unit = unit;
            this.deductCost(unit);
            return true;
          } else {
            console.log(`Unit ${unit.name} cannot be placed on ${cell.terrain} terrain.`);
            return false;
          }
        } else {
          console.log(`Not enough budget to place ${unit.name}.`);
          return false;
        }
      } else {
        console.log(`Unit ${unit.name} does not belong to the current team.`);
        return false;
      }
    }
    return false;
  }
  
  // Check if a unit is from a particular team
  isUnitTeam(unit) {
    return unit.team === this.currentTeam;
  }
    
  moveUnit(unit, newX, newY) {
    const { x, y } = this.findUnitPosition(unit);
    if (x !== -1 && this.isWithinBounds(newX, newY)) {
      const targetCell = this.grid[newY][newX];

      if (!targetCell.unit && this.isTerrainCompatible(unit, targetCell.terrain)) {
        this.grid[y][x].unit = null; 
        targetCell.unit = unit;       
      } else {
        console.log('Cannot move unit to incompatible terrain or occupied cell.');
      }
    }
  }

  getUnitAt(x, y) {
    if (this.isWithinBounds(x, y)) {
      return this.grid[y][x].unit;
    }
    return null;
  }

  findUnitPosition(unit) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.grid[y][x].unit === unit) {
          return { x, y };
        }
      }
    }
    return { x: -1, y: -1 };
  }

  // UNIT RULES
  isWithinBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }
    
  isUnitTeam(unit) {
    if (unit.team === this.currentTeam) return true;
  }
  
  canAffordUnit(unit) {
    const unitCost = unit.cost;
    return this.budget[this.currentTeam] >= unitCost;
  }
  
  deductCost(unit) {
    const unitCost = unit.cost;
    this.budget[this.currentTeam] -= unitCost;
    this.updateBudgetDisplay();
    return this.budget[this.currentTeam];
  }

  updateBudgetDisplay() {
    const ArgBudgetDisplay = document.getElementById('argBudget');
    const UkBudgetDisplay = document.getElementById('ukBudget');
    ArgBudgetDisplay.innerText = `Argentina: ${this.budget.arg}`;
    UkBudgetDisplay.innerText = `UK: ${this.budget.uk}`;
  }

  isTerrainCompatible(unit, terrain) {
    if (unit.type === 'aircraft') return true;
    if (unit.type === 'aircraft carrier' && terrain === 'water') return true;
    if (unit.type === 'infantry' && terrain === 'land') return true;
    if (unit.type === 'building' && terrain === 'land') return true;

    return false;
  }

  getDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
  
  renderBoard(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;

    this.clearMoveScope();

    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('div');
        const terrainType = this.grid[y][x].terrain;
        cell.className = `cell ${terrainType}`;
        cell.dataset.x = x;
        cell.dataset.y = y;
  
        const unit = this.getUnitAt(x, y);
  
        if (unit) {
          const unitImage = document.createElement('img');
          const unitBar = document.createElement('span');
  
          unitImage.id = `unit-${unit.id}`;
          unitImage.className = `unit ${unit.state} ${unit.team} fade-in`;
          unitImage.src = `./assets/img/units/${unit.imgPath}`;
          unitBar.classList.add('stamina__bar');
          unitBar.innerText = unit.stamina;
  
          if (unit.span) {
            cell.style.gridColumn = `span ${unit.span.columns}`;
            cell.style.gridRow = `span ${unit.span.rows}`;
          }
  
          cell.appendChild(unitImage);
          cell.appendChild(unitBar);
          this.updateStaminaBar(unit, unitBar);
          this.applyHitEffect(unit, unitImage);
  
          if (unit.team === this.currentTeam) {
            game.selectUnit(unit);
            if (game.selectedUnit) {
              const { x: currentX, y: currentY } = this.findUnitPosition(game.selectedUnit);
              const possibleMoves = this.calculateMoveScope(game.selectedUnit, currentX, currentY);
              // this.highlightMoveScope(possibleMoves);
            } else {
              this.clearMoveScope();
            }
            game.updateButtonStates();
          }
        }
  
        cell.addEventListener('click', () => this.onCellClick(x, y));
        container.appendChild(cell);
      }
    }
  
    document.querySelectorAll('.unit-option').forEach(option => {
      option.addEventListener('click', (event) => {
        const unitType = event.target.dataset.unitType;
        handleAddUnit(unitType);
      });
    });
  
    function handleAddUnit(unitType) {
      game.enableAddMode(unitType);
    }
  }

  updateStaminaBar(unit, unitBar) {
    const staminaPercentage = (unit.stamina / unit.totalStamina) * 100;

    unitBar.innerText = unit.stamina;
    if (staminaPercentage >= 75) {
      unitBar.style.backgroundColor = 'greenyellow';
    } else if (staminaPercentage >= 50) {
      unitBar.style.backgroundColor = 'yellow';
    } else if (staminaPercentage >= 25) {
      unitBar.style.backgroundColor = 'orangred';
    } else {
      unitBar.style.backgroundColor = 'red';
    }
  }

  saveUnitState(unit) {
    const unitState = {
      id: unit.id,
      stamina: unit.stamina,
      prevStamina: unit.totalStamina,
    };
    localStorage.setItem(`unit-${unit.id}`, JSON.stringify(unitState));
  }

  loadUnitState(unitId) {
    const unitState = JSON.parse(localStorage.getItem(`unit-${unitId}`));
    return unitState;
  }

  applyHitEffect(unit, unitImage) {
    const unitState = this.loadUnitState(unit.id);
    if (unitState && unitState.prevStamina !== unit.stamina) {
       unitImage.classList.add('hit-effect');
       setTimeout(() => {
         unitImage.classList.remove('hit-effect');
       }, 600);
    }
    this.saveUnitState(unit);
  }

  onCellClick(x, y) {
    if (game.addMode && game.unitToAdd) {
      if (this.placeUnit(game.unitToAdd, x, y)) {
        game.disableAddMode();
        game.switchTurn();
      }
    } else {
      const unit = this.getUnitAt(x, y);
      if (unit) {
        game.selectUnit(unit);
      } else {
        game.moveSelectedUnit(x, y);
      }
    }
    this.renderBoard('board');
  }

// Hightlight scope
calculateMoveScope(unit, currentX, currentY) {
  const possibleMoves = [];
  const displacement = unit.displacement;

  for (let dx = -displacement; dx <= displacement; dx++) {
    for (let dy = -displacement; dy <= displacement; dy++) {
      if (Math.abs(dx) + Math.abs(dy) <= displacement) {
        const newX = currentX + dx;
        const newY = currentY + dy;
        possibleMoves.push({ x: newX, y: newY });
      }
    }
  }

  localStorage.setItem('highlightedCells', JSON.stringify(possibleMoves));
  console.log(possibleMoves);
  return possibleMoves;
}

highlightMoveScope(possibleMoves) {
  const cells = JSON.parse(localStorage.getItem('highlightedCells')) || [];
  
  cells.forEach(move => {
    const availableCell = document.querySelector(`.cell[data-x="${move.x}"][data-y="${move.y}"]`);
    if (availableCell) {
      availableCell.classList.add('highlight');
    }
  });
}

  clearMoveScope() {
    const highlightedCells = document.querySelectorAll('.highlight');
    highlightedCells.forEach(cell => {
      cell.classList.remove('highlight');
    });
  }
  
  isValidMove(x, y) {
    return (
      x >= 0 &&
      y >= 0 &&
      x < this.width &&
      y < this.height &&
      !this.getUnitAt(x, y)
    );
  }
}
