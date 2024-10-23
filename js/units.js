const availableUnits = [
  {
    name: "Mirage V Dagger",
    firePower: 70,       
    fireScope: 6,       
    displacement: 7,    
    stamina: 50,         
    shield: 30,          
    cost: 10000,          
    type: "aircraft",
    team: "arg",
    imgPath: ''
  },
  {
    name: "Chinook CH-47",
    firePower: 20,       
    fireScope: 1,       
    displacement: 4,    
    stamina: 50,         
    shield: 30,          
    cost: 20000000,           
    type: "aircraft",
    team: "arg",
    imgPath: ''
  },
  {
    name: "FMA IA 58 Pucará",
    firePower: 50,       
    fireScope: 4,       
    displacement: 5,    
    stamina: 60,         
    shield: 20,          
    cost: 8000000,            
    type: "aircraft",
    team: "arg",
    imgPath: ''
  },
  {
    name: "Super Etendard",
    firePower: 90,       
    fireScope: 8,       
    displacement: 6,    
    stamina: 50,         
    shield: 40,          
    cost: 15000000,            
    type: "aircraft",
    team: "arg",
    imgPath: ''
  },
  {
    name: "ARA 25 DE MAYO",
    firePower: 30,      
    fireScope: 7,       
    displacement: 2,    
    stamina: 180,       
    shield: 20,         
    cost: 60000000,            
    type: "aircraft carrier",
    team: "arg",
    imgPath: ''
  },
  {
    name: "Soldado FA",
    firePower: 40,
    fireScope: 2,
    displacement: 1, 
    stamina: 40, 
    cost: 10000, 
    shield: 20,          
    type: "infantry",
    team: "arg",
    imgPath: 'arg-soldados.png'
  },

  // UK
  {
    name: "Avro Vulcan",
    firePower: 10,      
    fireScope: 9,       
    displacement: 4,    
    stamina: 70,         
    shield: 50,          
    cost: 25000000,           
    type: "aircraft",
    team: "uk",
    imgPath: ''
  },
  {
    name: "Sea Harrier",
    firePower: 80,       
    fireScope: 7,       
    displacement: 6,    
    stamina: 60,         
    shield: 50,          
    cost: 20000000,           
    type: "aircraft",
    team: "uk",
    imgPath: ''
  },
  {
    name: "Sea King",
    firePower: 30,       
    fireScope: 4,       
    displacement: 5,    
    stamina: 60,         
    shield: 40,          
    cost: 12000000,           
    type: "aircraft",
    team: "uk",
    imgPath: "sea-king.png"
  },
  {
    name: "Nimrod MR2",
    firePower: 50,       
    fireScope: 6,       
    displacement: 6,    
    stamina: 60,         
    shield: 40,          
    cost: 15000000,           
    type: "aircraft",
    team: "uk",
    imgPath: ''
  },
  {
    name: "HMS Invincible",
    firePower: 90,      
    fireScope: 8,       
    displacement: 2,    
    stamina: 200,       
    shield: 250,         
    cost: 80000000,            
    type: "aircraft carrier",
    team: "uk",
    imgPath: ''
  },
  {
    name: "SAS Soldier",
    firePower: 50,
    fireScope: 3,
    displacement: 1,
    stamina: 50,
    shield: 30,    
    cost: 20000,            
    type: "infantry",
    team: "uk",
    imgPath: 'uk-soldiers.png'
  }
];

class Unit {
    constructor(name, firePower, fireScope, displacement, stamina, shield, cost, type, team, imgPath) {
      this.name = name;
      this.firePower = firePower;
      this.fireScope = fireScope;
      this.displacement = displacement;
      this.stamina = stamina;
      this.shield = shield;
      this.cost = cost;
      this.type = type;
      this.state = 'idle'; 
      this.team = team;
      this.imgPath = imgPath;
    }
  
    takeDamage(damage) {
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
  }
