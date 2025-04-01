const availableUnits = [
  {
    id: 'flag01',
    name: "Flag",
    imgPath: 'uk-flag.png',
    type: "building",
    stamina: 0,
    totalStamina: 0,
    cost: 10000,
    team: 'uk',
    span: { columns: 100, rows: 100 }
  },
  // ARG
  {
    id: 'arg06',
    name: "Soldado FA",
    firePower: 40,
    fireScope: 2,
    displacement: 1, 
    stamina: 40, 
    cost: 10000, 
    shield: 20,          
    totalStamina: 100,
    type: "infantry",
    team: "arg",
    imgPath: 'arg-soldados.png',
    span: { columns: 100, rows: 100 }
  },

  // Fuerza Aérea Argentina
  { id: 'arg02', name: "A-4 Skyhawk", firePower: 60, fireScope: 5, displacement: 7, stamina: 45, shield: 25, totalStamina: 90, cost: 9000, type: "aircraft", team: "arg", imgPath: 'arg-skyhawk-2.png', span: { columns: 100, rows: 100 } },
  { id: 'arg03', name: "Mirage III", firePower: 75, fireScope: 7, displacement: 8, stamina: 50, shield: 30, totalStamina: 100, cost: 11000, type: "aircraft", team: "arg", imgPath: 'arg-mirageiii.png', span: { columns: 100, rows: 100 } },
  { id: 'arg04', name: "Mirage V Dagger", firePower: 70, fireScope: 6, displacement: 7, stamina: 50, shield: 30, totalStamina: 100, cost: 10000, type: "aircraft", team: "arg", imgPath: 'arg-dagger-2.png', span: { columns: 100, rows: 100 } },
  { id: 'arg05', name: "Pucará IA-58", firePower: 55, fireScope: 5, displacement: 5, stamina: 60, shield: 20, totalStamina: 80, cost: 6000, type: "aircraft", team: "arg", imgPath: 'arg-pucara-2.png', span: { columns: 100, rows: 100 } },
  { id: 'arg06', name: "Canberra Mk 62", firePower: 65, fireScope: 8, displacement: 6, stamina: 55, shield: 25, totalStamina: 90, cost: 9500, type: "aircraft", team: "arg", imgPath: 'arg-canberra.png', span: { columns: 100, rows: 100 } },
  { id: 'arg07', name: "Super Etendard", firePower: 65, fireScope: 8, displacement: 6, stamina: 55, shield: 25, totalStamina: 90, cost: 9500, type: "aircraft", team: "arg", imgPath: 'arg-etendard-2.png', span: { columns: 100, rows: 100 } },

  // Helicópteros
  { id: 'arg09', name: "Bell UH-1H", firePower: 30, fireScope: 3, displacement: 6, stamina: 50, shield: 15, totalStamina: 65, cost: 5000, type: "aircraft", team: "arg", imgPath: 'arg-bell.png', span: { columns: 100, rows: 100 } },
  { id: 'arg10', name: "Aérospatiale SA-330 Puma", firePower: 20, fireScope: 3, displacement: 6, stamina: 60, shield: 20, totalStamina: 80, cost: 7000, type: "aircraft", team: "arg", imgPath: 'arg-puma.png', span: { columns: 100, rows: 100 } },
  { id: 'arg19', name: "Chinook CH-47", firePower: 20, fireScope: 3, displacement: 6, stamina: 60, shield: 20, totalStamina: 80, cost: 7000, type: "aircraft", team: "arg", imgPath: 'arg-chinook.png', span: { columns: 120, rows: 120 } },

  // Artillería y Apoyo de Fuego
  { id: 'arg11', name: "FN MAG", firePower: 50, fireScope: 4, displacement: 2, stamina: 30, shield: 10, totalStamina: 40, cost: 3000, type: "infantry", team: "arg", imgPath: 'arg-mag.png', span: { columns: 100, rows: 100 } },
  { id: 'arg11', name: "FH-70", firePower: 50, fireScope: 4, displacement: 2, stamina: 30, shield: 10, totalStamina: 40, cost: 3000, type: "infantry", team: "arg", imgPath: 'arg-fh-70.png', span: { columns: 100, rows: 100 } },
  { id: 'arg11', name: "Lanzador Exocet", firePower: 50, fireScope: 4, displacement: 2, stamina: 30, shield: 10, totalStamina: 40, cost: 3000, type: "infantry", team: "arg", imgPath: 'arg-lanzador-exocet.png', span: { columns: 100, rows: 100 } },
  
  // Blindados y Vehículos Terrestres
  { id: 'arg23', name: "Panhard AML-90", firePower: 65, fireScope: 5, displacement: 6, stamina: 55, shield: 25, totalStamina: 80, cost: 8000, type: "infantry", team: "arg", imgPath: 'arg-panhard.png', span: { columns: 100, rows: 100 } },
  { id: 'arg24', name: "M-113", firePower: 50, fireScope: 4, displacement: 5, stamina: 65, shield: 30, totalStamina: 95, cost: 9000, type: "infantry", team: "arg", imgPath: 'arg-m-113.png', span: { columns: 100, rows: 100 } },
  { id: 'arg25', name: "Anfibio LVTP-7113", firePower: 50, fireScope: 4, displacement: 5, stamina: 65, shield: 30, totalStamina: 95, cost: 9000, type: "infantry", team: "arg", imgPath: 'arg-anfibio.png', span: { columns: 100, rows: 100 } },

  // Defensa Antiaérea
  { id: 'arg12', name: "Roland SAM", firePower: 90, fireScope: 8, displacement: 3, stamina: 50, shield: 40, totalStamina: 90, cost: 12000, type: "infantry", team: "arg", imgPath: 'arg-roland.png', span: { columns: 100, rows: 100 } },
  { id: 'arg13', name: "Bofors 40mm", firePower: 75, fireScope: 6, displacement: 2, stamina: 45, shield: 25, totalStamina: 70, cost: 9000, type: "infantry", team: "arg", imgPath: 'arg-bofors.png', span: { columns: 100, rows: 100 } },

  // Armada Argentina
  { id: 'arg15', name: "ARA Meko 140", firePower: 0, fireScope: 10, displacement: 3, stamina: 200, shield: 50, totalStamina: 250, cost: 50000, type: "navy", team: "arg", imgPath: 'arg-meko.png', span: { columns: 150, rows: 150 } },
  { id: 'arg15', name: "ARA Veinticinco de Mayo", firePower: 0, fireScope: 10, displacement: 3, stamina: 200, shield: 50, totalStamina: 250, cost: 50000, type: "navy", team: "arg", imgPath: 'arg-25.png', span: { columns: 100, rows: 100 } },
  { id: 'arg16', name: "ARA Drummond", firePower: 90, fireScope: 8, displacement: 7, stamina: 120, shield: 40, totalStamina: 160, cost: 30000, type: "navy", team: "arg", imgPath: 'arg-drummond.png', span: { columns: 150, rows: 150 } },
  { id: 'arg17', name: "ARA Belgrano", firePower: 95, fireScope: 9, displacement: 6, stamina: 150, shield: 50, totalStamina: 200, cost: 4500, type: "navy", team: "arg", imgPath: 'arg-belgrano.png', span: { columns: 200, rows: 300 } },
  { id: 'arg18', name: "ARA San Luis", firePower: 85, fireScope: 9, displacement: 4, stamina: 100, shield: 50, totalStamina: 150, cost: 35000, type: "submarine", team: "arg", imgPath: 'arg-sanluis.png', span: { columns: 100, rows: 100 } },

  // UK
  {
    id: 'uk06',
    name: "SAS Soldier",
    firePower: 50,
    fireScope: 3,
    displacement: 1,
    stamina: 50,
    shield: 30,    
    totalStamina: 100,
    cost: 2000,
    type: "infantry",
    team: "uk",
    imgPath: 'uk-soldiers.png',
    span: { columns: 100, rows: 100 }
  },

    // Fuerza Aérea Británica (RAF & Royal Navy)
    { id: 'uk01', name: "Harrier GR.3", firePower: 75, fireScope: 7, displacement: 8, stamina: 55, shield: 30, totalStamina: 100, cost: 12000, type: "aircraft", team: "uk", imgPath: 'uk-harrier-2.png', span: { columns: 100, rows: 100 } },
    { id: 'uk02', name: "Sea Harrier FRS.1", firePower: 80, fireScope: 7, displacement: 8, stamina: 60, shield: 35, totalStamina: 110, cost: 13000, type: "aircraft", team: "uk", imgPath: 'uk-seaharrier.png', span: { columns: 100, rows: 100 } },
    { id: 'uk03', name: "Canberra PR.9", firePower: 60, fireScope: 8, displacement: 6, stamina: 50, shield: 25, totalStamina: 90, cost: 9500, type: "aircraft", team: "uk", imgPath: 'uk-canberra.png', span: { columns: 100, rows: 100 } },
  
    // Helicópteros
    { id: 'uk04', name: "Westland Lynx", firePower: 50, fireScope: 5, displacement: 7, stamina: 50, shield: 20, totalStamina: 70, cost: 7000, type: "aircraft", team: "uk", imgPath: 'uk-lynx.png', span: { columns: 100, rows: 100 } },
    { id: 'uk05', name: "Westland Sea King", firePower: 30, fireScope: 3, displacement: 6, stamina: 60, shield: 30, totalStamina: 90, cost: 9000, type: "aircraft", team: "uk", imgPath: 'uk-sea-king-2.png', span: { columns: 100, rows: 100 } },
  
    // Artillería y Apoyo de Fuego
    { id: 'uk06', name: "FH-70 155mm", firePower: 85, fireScope: 9, displacement: 2, stamina: 40, shield: 20, totalStamina: 60, cost: 8000, type: "artillery", team: "uk", imgPath: 'uk-fh70.png', span: { columns: 100, rows: 100 } },
    { id: 'uk07', name: "L118 Light Gun 105mm", firePower: 70, fireScope: 8, displacement: 3, stamina: 45, shield: 25, totalStamina: 70, cost: 6500, type: "artillery", team: "uk", imgPath: 'uk-l118.png', span: { columns: 100, rows: 100 } },
    { id: 'uk08', name: "L7A2 GPMG", firePower: 50, fireScope: 4, displacement: 2, stamina: 35, shield: 15, totalStamina: 50, cost: 3000, type: "support", team: "uk", imgPath: 'uk-l7a2.png', span: { columns: 100, rows: 100 } },
  
    // Blindados y Vehículos Terrestres
    { id: 'uk01', name: 'FV101 Scorpion', firePower: 70, fireScope: 5, displacement: 7, stamina: 60, shield: 30, totalStamina: 90, cost: 10000, type: 'armor', team: 'uk', imgPath: 'uk-fv101-scorpion.png', span: { columns: 100, rows: 100 } },
    { id: 'uk02', name: 'FV107 Scimitar', firePower: 65, fireScope: 6, displacement: 7, stamina: 55, shield: 25, totalStamina: 80, cost: 9500, type: 'armor', team: 'uk', imgPath: 'uk-fv107-scimitar.png', span: { columns: 100, rows: 100 } },    

    // Defensa Antiaérea
    { id: 'uk09', name: "Rapier SAM", firePower: 95, fireScope: 9, displacement: 3, stamina: 55, shield: 45, totalStamina: 100, cost: 14000, type: "anti-air", team: "uk", imgPath: 'uk-rapier.png', span: { columns: 100, rows: 100 } },
    { id: 'uk10', name: "Bofors 40mm", firePower: 75, fireScope: 6, displacement: 2, stamina: 45, shield: 25, totalStamina: 70, cost: 9000, type: "anti-air", team: "uk", imgPath: 'uk-bofors.png', span: { columns: 100, rows: 100 } },
    { id: 'uk11', name: "Blowpipe MANPADS", firePower: 60, fireScope: 5, displacement: 1, stamina: 30, shield: 20, totalStamina: 50, cost: 7000, type: "anti-air", team: "uk", imgPath: 'uk-blowpipe.png', span: { columns: 100, rows: 100 } },
  
    // Royal Navy
    { id: 'uk12', name: "HMS Hermes", firePower: 0, fireScope: 10, displacement: 3, stamina: 250, shield: 60, totalStamina: 310, cost: 60000, type: "navy", team: "uk", imgPath: 'uk-hermes.png', span: { columns: 100, rows: 100 } },
    { id: 'uk13', name: "HMS Invincible", firePower: 0, fireScope: 10, displacement: 3, stamina: 240, shield: 55, totalStamina: 295, cost: 40000, type: "navy", team: "uk", imgPath: 'uk-invincible-2.png', span: { columns: 200, rows: 200 } },
    { id: 'uk14', name: "HMS Sheffield", firePower: 95, fireScope: 9, displacement: 6, stamina: 130, shield: 50, totalStamina: 180, cost: 35000, type: "navy", team: "uk", imgPath: 'uk-sheffield.png', span: { columns: 100, rows: 100 } },
    { id: 'uk15', name: "HMS Conqueror", firePower: 90, fireScope: 9, displacement: 4, stamina: 110, shield: 50, totalStamina: 160, cost: 40000, type: "submarine", team: "uk", imgPath: 'uk-conqueror.png', span: { columns: 100, rows: 100 } },
    { id: 'uk16', name: "HMS Broadsword", firePower: 90, fireScope: 9, displacement: 4, stamina: 110, shield: 50, totalStamina: 160, cost: 40000, type: "navy", team: "uk", imgPath: 'uk-broadsword.png', span: { columns: 200, rows: 200 } },
    { id: 'uk17', name: "HMS Dauntless", firePower: 90, fireScope: 9, displacement: 4, stamina: 110, shield: 50, totalStamina: 160, cost: 40000, type: "navy", team: "uk", imgPath: 'uk-dauntless.png', span: { columns: 200, rows: 200 } }
];

class Unit {
  constructor(config) {
    Object.assign(this, config);  
  }
  
  takeDamage(damage) {
    if (this.type === 'building') {
      return; 
  }
    const effectiveDamage = Math.max(0, damage - this.shield);
    this.stamina -= effectiveDamage;

    if (this.stamina <= 0) {
      this.stamina = 0;
      this.state = 'destroyed';
    }
  }

  isDestroyed() {
    return this.state === 'destroyed';
  }

  onAttacked(attacker) {
    if (attacker.team !== this.team) {
      this.changeTeam();
    }
  }

  changeTeam() {
    const enemyTeam = this.team === 'arg' ? 'uk' : 'arg'; 
    this.team = enemyTeam;
    this.updateAppearance(); 
    console.log(`Building ${this.id} has switched to team ${enemyTeam}`);
    console.log(this.imgPath);
  }

  updateAppearance() {
    this.imgPath = `${this.team}-flag.png`;
    console.log(`Updated appearance to ${this.imgPath}`);
  }
}
  
class Building extends Unit {
  constructor(id, name, team, imgPath, span) {
    super({ id, name, team, imgPath, span }); // Ensure parameters are passed correctly
    this.type = 'building';
  }
}
