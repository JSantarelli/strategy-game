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
    span: { columns: 1, rows: 1 }
  },
  // ARG
  {
    id: 'arg01',
    name: "Mirage V Dagger",
    firePower: 70,       
    fireScope: 6,       
    displacement: 7,    
    stamina: 50,         
    shield: 30,         
    totalStamina: 100,
    cost: 10000,          
    type: "aircraft",
    team: "arg",
    imgPath: 'arg-dagger.png',
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'arg02',
    name: "Chinook CH-47",
    firePower: 20,       
    fireScope: 1,       
    displacement: 4,    
    stamina: 50,         
    shield: 30,          
    totalStamina: 100,
    cost: 20000000,           
    type: "aircraft",
    team: "arg",
    imgPath: 'arg-chinook.png',
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'arg03',
    name: "FMA IA 58 Pucará",
    firePower: 50,       
    fireScope: 4,       
    displacement: 5,    
    stamina: 60,         
    shield: 20,          
    totalStamina: 100,
    cost: 8000000,            
    type: "aircraft",
    team: "arg",
    imgPath: 'arg-pucara.png',
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'arg04',
    name: "Super Etendard",
    firePower: 90,       
    fireScope: 8,       
    displacement: 6,    
    stamina: 50,         
    shield: 40,          
    totalStamina: 100,
    cost: 15000000,            
    type: "aircraft",
    team: "arg",
    imgPath: 'arg-etendard.png',
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'arg05',
    name: "ARA 25 de Mayo",
    firePower: 30,      
    fireScope: 7,       
    displacement: 2,    
    stamina: 180,       
    shield: 20,         
    totalStamina: 100,
    cost: 60000000,            
    type: "aircraft carrier",
    team: "arg",
    imgPath: 'arg-ara-25.png',
    span: { columns: 2, rows: 2 }
  },
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
    span: { columns: 1, rows: 1 }
  },

  // UK
  {
    id: 'uk01',
    name: "Avro Vulcan",
    firePower: 10,      
    fireScope: 9,       
    displacement: 4,    
    stamina: 70,         
    shield: 50,          
    totalStamina: 100,
    cost: 25000000,           
    type: "aircraft",
    team: "uk",
    imgPath: 'uk-avro.png',
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'uk02',
    name: "Sea Harrier",
    firePower: 80,       
    fireScope: 7,       
    displacement: 6,    
    stamina: 60,         
    shield: 50,          
    totalStamina: 100,
    cost: 20000000,           
    type: "aircraft",
    team: "uk",
    imgPath: 'uk-harrier.png',
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'uk03',
    name: "Sea King",
    firePower: 30,       
    fireScope: 4,       
    displacement: 5,    
    stamina: 60,         
    shield: 40,          
    totalStamina: 100,
    cost: 12000000,           
    type: "aircraft",
    team: "uk",
    imgPath: "uk-sea-king.png",
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'uk04',
    name: "Nimrod MR2",
    firePower: 50,       
    fireScope: 6,       
    displacement: 6,    
    stamina: 60,         
    shield: 40,          
    totalStamina: 100,
    cost: 15000000,           
    type: "aircraft",
    team: "uk",
    imgPath: 'uk-nimrod.png',
    span: { columns: 1, rows: 1 }
  },
  {
    id: 'uk05',
    name: "HMS Invincible",
    firePower: 90,      
    fireScope: 8,       
    displacement: 2,    
    stamina: 200,       
    shield: 250,         
    totalStamina: 100,
    cost: 80000000,            
    type: "aircraft carrier",
    team: "uk",
    imgPath: 'uk-invincible.png',
    span: { columns: 2, rows: 2 }
  },
  {
    id: 'uk06',
    name: "SAS Soldier",
    firePower: 50,
    fireScope: 3,
    displacement: 1,
    stamina: 50,
    shield: 30,    
    totalStamina: 100,
    cost: 20000,
    type: "infantry",
    team: "uk",
    imgPath: 'uk-soldiers.png',
    span: { columns: 1, rows: 1 }
  }
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
