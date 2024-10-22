class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    // Initialize the grid with random terrain ("land" or "water")
    this.grid = Array.from({ length: height }, () => 
      Array.from({ length: width }, () => ({
        unit: null,
        terrain: Math.random() < 0.5 ? 'land' : 'water' // Random terrain for demonstration
      }))
    );
  }

  getUnitsByTeam(team) {
    return this.units.filter(unit => unit.team === team && !unit.isDestroyed());
  }

  placeUnit(unit, x, y) {
    if (this.isWithinBounds(x, y)) {
      const cell = this.grid[y][x];

      // Check terrain compatibility
      if (this.isTerrainCompatible(unit, cell.terrain)) {
        cell.unit = unit;
        return true;
      } else {
        console.log(`Unit ${unit.name} cannot be placed on ${cell.terrain} terrain.`);
        return false;
      }
    }
    return false;
  }

  moveUnit(unit, newX, newY) {
    const { x, y } = this.findUnitPosition(unit);
    if (x !== -1 && this.isWithinBounds(newX, newY)) {
      const targetCell = this.grid[newY][newX];

      // Check if target cell is empty and terrain is compatible
      if (!targetCell.unit && this.isTerrainCompatible(unit, targetCell.terrain)) {
        this.grid[y][x].unit = null; // Remove unit from old position
        targetCell.unit = unit;       // Place unit in new position
      } else {
        console.log(`Cannot move unit to incompatible terrain or occupied cell.`);
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

  isWithinBounds(x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }

  isTerrainCompatible(unit, terrain) {
    // aircraft can be on any terrain
    if (unit.type === 'aircraft') return true;
    // aircraft carriers can only be on water
    if (unit.type === 'aircraft carrier' && terrain === 'water') return true;
    // Infantry can only be on land
    if (unit.type === 'Infantry' && terrain === 'land') return true;

    return false;
  }

  getDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  renderBoard(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous render

    for (let y = 0; y < this.height; y++) {
      const row = document.createElement('div');
      row.className = 'row';

      for (let x = 0; x < this.width; x++) {
        const cell = document.createElement('div');
        const terrainType = this.grid[y][x].terrain;
        cell.className = `cell ${terrainType}`;
        cell.dataset.x = x;
        cell.dataset.y = y;

        const unit = this.getUnitAt(x, y);
        if (unit) {
          const unitDiv = document.createElement('div');
          unitDiv.className = `unit ${unit.state} ${unit.team}`;
          unitDiv.innerText = `${unit.name} (Stamina: ${unit.stamina})`;
          cell.appendChild(unitDiv);
        }

        cell.addEventListener('click', () => this.onCellClick(x, y));
        row.appendChild(cell);
      }

      container.appendChild(row);
    }

    // Example setup for side panel unit selection
    document.querySelectorAll('.unit-option').forEach(option => {
      option.addEventListener('click', (event) => {
        const unitType = event.target.dataset.unitType;
        handleAddUnit(unitType);
      });
    });

    function handleAddUnit(unitType) {
      game.enableAddMode(unitType); // Activate add mode and specify the unit type
    }
  }

  onCellClick(x, y) {
    if (game.addMode && game.unitToAdd) {
      // If in add mode, place the unit on the board
      if (this.placeUnit(game.unitToAdd, x, y)) {
        game.disableAddMode(); // Disable add mode after placing the unit
      }
    } else {
      const unit = this.getUnitAt(x, y);
      if (unit) {
        game.selectUnit(unit);
      } else {
        game.moveSelectedUnit(x, y);
      }
    }

    // Re-render the board after any interaction
    this.renderBoard('board');
  }
}
