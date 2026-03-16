const predefinedGrid = [
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'water', 'water', 'water', 'land', 'land', 'water', 'land', 'land', 'land', 'land', 'land', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'water', 'land', 'land', 'water', 'land', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'water', 'water', 'land', 'land', 'land', 'land', 'water', 'water', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water','water', 'water', 'water', 'water', 'water', 'land', 'water', 'water', 'water', 'land', 'land', 'land', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
  ['water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water', 'water'],
];

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = this.createGrid();
    this.currentTeam = 'uk'; 
    this.budget = {
      uk: 580000, 
      arg: 250000 
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
          return false;
        }
      } else {
        return false;
      }
    }
    return false;
  }
  
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
    if (!unit) return false;

    if (unit.type === 'aircraft') return true;
    if ((unit.type === 'navy' || unit.type === 'submarine') && terrain === 'water') return true;
    if (unit.type === 'infantry' && terrain === 'land') return true;
    if (unit.type === 'artillery' && terrain === 'land') return true;
    if (unit.type === 'anti-air' && terrain === 'land') return true;
    if (unit.type === 'armor' && terrain === 'land') return true;
    if (unit.type === 'support' && terrain === 'land') return true;
    if (unit.type === 'building' && terrain === 'land') return true;

    return false;
  }

  getDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  // ─────────────────────────────────────────────────────────────────────
  // STAMINA THRESHOLDS
  // Single source of truth for stamina levels, colours, and damage GIFs.
  // Thresholds: healthy ≥75 | damaged ≥50 | heavy ≥25 | critical <25
  // GIF paths assume ./assets/fx/<name>
  // ─────────────────────────────────────────────────────────────────────
  getStaminaThreshold(unit) {
    const pct = (unit.stamina / unit.totalStamina) * 100;
    if (pct >= 75) return { level: 'healthy',  color: 'greenyellow', gif: null };
    if (pct >= 50) return { level: 'damaged',  color: 'yellow',      gif: 'damage-light.gif' };
    if (pct >= 25) return { level: 'heavy',    color: 'orangered',   gif: 'damage-heavy.gif' };
    return            { level: 'critical', color: 'red',         gif: 'damage-critical.gif' };
  }

  // ─────────────────────────────────────────────────────────────────────
  // RENDER BOARD
  // ─────────────────────────────────────────────────────────────────────
  renderBoard(containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
  
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;
  
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
          const unitBar   = document.createElement('span');

          unitImage.id        = `unit-${unit.id}`;
          unitImage.className = `unit ${unit.state} ${unit.team} fade-in`;
          unitImage.src       = `./assets/img/units/${unit.imgPath}`;
          unitBar.classList.add('stamina__bar');
          unitBar.innerText = unit.stamina;

          if (game.selectedUnit) {
            const { x: currentX, y: currentY } = this.findUnitPosition(game.selectedUnit);
            const possibleMoves = this.calculateMoveScope(game.selectedUnit, currentX, currentY);
            this.highlightMoveScope(possibleMoves);
          } else {
            this.clearMoveScope();
          }

          if (unit.span) {
            cell.style.height = `${unit.span.columns}%`;
            cell.style.width  = `${unit.span.rows}%`;
          }

          cell.appendChild(unitImage);
          cell.appendChild(unitBar);
          this.updateStaminaBar(unit, unitBar);
          this.applyHitEffect(unit, unitImage);
        }
  
        cell.addEventListener('click', () => this.onCellClick(x, y));
        container.appendChild(cell);
      }
    }

    // ── Delegated hover targeting gif ─────────────────────────────────
    // A single listener pair on the container evaluates the in-range check
    // live at hover time, so it's always in sync with game.selectedUnit and
    // survives every renderBoard call without stale per-cell listeners.
    this._attachHoverTargeting(container);
  
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

  // ─────────────────────────────────────────────────────────────────────
  // HOVER TARGETING  (delegated — one listener pair per container)
  // ─────────────────────────────────────────────────────────────────────
  _attachHoverTargeting(container) {
    // mouseover fires when the pointer enters the element OR any descendant,
    // so we use closest() to find the actual .cell being hovered.
    container.addEventListener('mouseover', (e) => {
      const cell = e.target.closest('.cell');
      if (!cell) return;

      // Only act when no overlay is already showing on this cell
      if (cell.querySelector('.target-overlay')) return;

      if (!this._isCellInRange(cell)) return;

      const overlay     = document.createElement('img');
      // Timestamp query-string forces the browser to restart the GIF
      overlay.src       = `./assets/fx/target.gif?t=${Date.now()}`;
      overlay.className = 'effect-overlay target-overlay';
      cell.appendChild(overlay);
    });

    container.addEventListener('mouseout', (e) => {
      const cell = e.target.closest('.cell');
      if (!cell) return;

      // Only remove if the pointer is truly leaving the cell, not just
      // moving between children (relatedTarget is still inside the cell).
      if (cell.contains(e.relatedTarget)) return;

      const overlay = cell.querySelector('.target-overlay');
      if (overlay) overlay.remove();
    });
  }

  // Returns true if the cell holds an enemy unit reachable by the selected unit.
  _isCellInRange(cell) {
    if (!game.selectedUnit) return false;

    const x = parseInt(cell.dataset.x, 10);
    const y = parseInt(cell.dataset.y, 10);

    const targetUnit = this.getUnitAt(x, y);
    if (!targetUnit || targetUnit.isDestroyed()) return false;
    if (targetUnit.team === game.selectedUnit.team) return false;

    const { x: sx, y: sy } = this.findUnitPosition(game.selectedUnit);
    const fireScope = game.selectedUnit.fireScope || 0;

    return this.getDistance(sx, sy, x, y) <= fireScope;
  }

  // ─────────────────────────────────────────────────────────────────────
  // STAMINA BAR  — uses shared threshold helper
  // ─────────────────────────────────────────────────────────────────────
  updateStaminaBar(unit, unitBar) {
    const { color } = this.getStaminaThreshold(unit);
    unitBar.innerText            = unit.stamina;
    unitBar.style.backgroundColor = color;
  }

  // ─────────────────────────────────────────────────────────────────────
  // PERSISTENT DAMAGE OVERLAY
  // Keeps the correct damage GIF visible on the cell across re-renders.
  // Called once after the explosion fades, and on every re-render for
  // units that are already below the healthy threshold.
  // ─────────────────────────────────────────────────────────────────────
  renderDamageOverlay(unit, cell) {
    // Destroyed unit — strip every overlay and leave the cell clean
    if (unit.isDestroyed()) {
      this._clearAllOverlays(cell);
      return;
    }

    // Remove any stale overlay first
    const existing = cell.querySelector('.damage-overlay');
    if (existing) existing.remove();

    const { gif } = this.getStaminaThreshold(unit);
    if (!gif) return; // healthy — no overlay needed

    const damageOverlay     = document.createElement('img');
    // Append timestamp so the browser reloads the GIF from the start
    damageOverlay.src       = `./assets/fx/${gif}?t=${Date.now()}`;
    damageOverlay.className = 'effect-overlay damage-overlay';
    cell.appendChild(damageOverlay);
  }

  // Removes every effect overlay (explosion, damage, target) from a cell.
  _clearAllOverlays(cell) {
    cell.querySelectorAll('.effect-overlay').forEach(el => el.remove());
  }

  // ─────────────────────────────────────────────────────────────────────
  // HIT EFFECT
  // On a stamina change:
  //   1. Show explosion.gif (800 ms)
  //   2. After explosion → show threshold-appropriate damage gif (persistent)
  // On a re-render with no stamina change:
  //   - Just (re)apply the persistent damage overlay so it survives re-draws.
  // ─────────────────────────────────────────────────────────────────────
  applyHitEffect(unit, unitImage) {
    const unitState = this.loadUnitState(unit.id);
    const cell      = unitImage.closest('.cell');

    if (unitState && unitState.prevStamina !== unit.stamina && cell) {
      // ── Stamina changed: play explosion then resolve to damage gif ──

      const explosionOverlay     = document.createElement('img');
      explosionOverlay.src       = `./assets/fx/explosion.gif?t=${Date.now()}`;
      explosionOverlay.className = 'effect-overlay explosion-overlay';
      cell.appendChild(explosionOverlay);

      const prevThreshold    = this._thresholdLevel(unitState.prevStamina, unit.totalStamina);
      const currentThreshold = this.getStaminaThreshold(unit).level;
      const crossedThreshold = prevThreshold !== currentThreshold;

      setTimeout(() => {
        explosionOverlay.remove();

        // Unit was destroyed during the explosion — clear everything and stop.
        if (unit.isDestroyed()) {
          this._clearAllOverlays(cell);
          return;
        }

        // If the hit pushed the unit into a new threshold bracket, show an
        // additional transition explosion before settling on the damage gif.
        if (crossedThreshold && currentThreshold !== 'healthy') {
          const transitionBlast     = document.createElement('img');
          transitionBlast.src       = `./assets/fx/explosion.gif?t=${Date.now()}`;
          transitionBlast.className = 'effect-overlay explosion-overlay explosion-overlay--transition';
          cell.appendChild(transitionBlast);

          setTimeout(() => {
            transitionBlast.remove();
            // Check again — a second hit may have landed during this window.
            if (unit.isDestroyed()) {
              this._clearAllOverlays(cell);
              return;
            }
            this.renderDamageOverlay(unit, cell);
          }, 600);
        } else {
          this.renderDamageOverlay(unit, cell);
        }
      }, 800);

    } else if (cell) {
      // ── No stamina change: just refresh the persistent overlay ──
      this.renderDamageOverlay(unit, cell);
    }

    this.saveUnitState(unit);
  }

  // Internal helper: returns the threshold level string for an arbitrary stamina value.
  _thresholdLevel(stamina, totalStamina) {
    const pct = (stamina / totalStamina) * 100;
    if (pct >= 75) return 'healthy';
    if (pct >= 50) return 'damaged';
    if (pct >= 25) return 'heavy';
    return 'critical';
  }

  // ─────────────────────────────────────────────────────────────────────
  // PERSISTENCE HELPERS
  // ─────────────────────────────────────────────────────────────────────
  saveUnitState(unit) {
    const existingState = this.loadUnitState(unit.id) || {};
    
    const unitState = {
      id:           unit.id,
      stamina:      unit.stamina,
      prevStamina:  existingState.stamina || unit.stamina,
      totalStamina: unit.totalStamina
    };
    
    localStorage.setItem(`unit-${unit.id}`, JSON.stringify(unitState));
  }

  loadUnitState(unitId) {
    const unitState = JSON.parse(localStorage.getItem(`unit-${unitId}`));
    return unitState;
  }

  // ─────────────────────────────────────────────────────────────────────
  // CELL CLICK
  // ─────────────────────────────────────────────────────────────────────
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

  // ─────────────────────────────────────────────────────────────────────
  // MOVE SCOPE
  // ─────────────────────────────────────────────────────────────────────
  calculateMoveScope(unit, currentX, currentY) {
    const possibleMoves  = [];
    const displacement   = unit.displacement;

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