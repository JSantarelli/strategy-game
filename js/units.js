const availableUnits = [
  {
    name: "Mirage V Dagger",
    firePower: 20,
    fireScope: 5,
    displacement: 3,
    stamina: 70,
    shield: 10,
    type: "aircraft",
    team: "arg",
  },
  {
    name: "Chinook CH-47",
    firePower: 15,
    fireScope: 4,
    displacement: 4,
    stamina: 60,
    shield: 8,
    type: "aircraft",
    team: "arg",
  },
  {
    name: "FMA IA 58 Pucará",
    firePower: 18,
    fireScope: 6,
    displacement: 3,
    stamina: 65,
    shield: 12,
    type: "aircraft",
    team: "arg",
  },
  {
    name: "Super Etendar",
    firePower: 25,
    fireScope: 5,
    displacement: 3,
    stamina: 75,
    shield: 15,
    type: "aircraft",
    team: "arg",
  },
  {
    name: "25 DE MAYO",
    firePower: 30,
    fireScope: 7,
    displacement: 2,
    stamina: 100,
    shield: 20,
    type: "aircraft carrier",
    team: "arg",
  },
  {
    name: "Avro Vulcan",
    firePower: 22,
    fireScope: 6,
    displacement: 4,
    stamina: 80,
    shield: 10,
    type: "aircraft",
    team: "uk",
  },
  {
    name: "Sea Harrier",
    firePower: 28,
    fireScope: 6,
    displacement: 3,
    stamina: 70,
    shield: 12,
    type: "aircraft",
    team: "uk",
  },
  {
    name: "Sea King",
    firePower: 17,
    fireScope: 5,
    displacement: 4,
    stamina: 60,
    shield: 15,
    type: "aircraft",
    team: "uk",
  },
  {
    name: "Nimrod MR2",
    firePower: 20,
    fireScope: 7,
    displacement: 3,
    stamina: 75,
    shield: 10,
    type: "aircraft",
    team: "uk",
  },
  {
    name: "HMS Invincible",
    firePower: 35,
    fireScope: 8,
    displacement: 2,
    stamina: 110,
    shield: 25,
    type: "aircraft carrier",
    team: "uk",
  },
];

class Unit {
    constructor(name, firePower, fireScope, displacement, stamina, shield, type, team) {
      this.name = name;
      this.firePower = firePower;
      this.fireScope = fireScope;
      this.displacement = displacement;
      this.stamina = stamina;
      this.shield = shield;
      this.type = type;
      this.state = 'idle'; // States: 'idle', 'selected', 'destroyed', 'origin', 'target'
      this.team = team; // Add team property
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
