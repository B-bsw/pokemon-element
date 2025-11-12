const typeChart = [
  {
    name: "Normal",
    strongAgainst: [],
    weakAgainst: ["Fighting"],
    noEffectFrom: ["Ghost"]
  },
  {
    name: "Fire",
    strongAgainst: ["Grass", "Ice", "Bug", "Steel"],
    weakAgainst: ["Water", "Ground", "Rock"],
    noEffectFrom: []
  },
  {
    name: "Water",
    strongAgainst: ["Fire", "Ground", "Rock"],
    weakAgainst: ["Electric", "Grass"],
    noEffectFrom: []
  },
  {
    name: "Electric",
    strongAgainst: ["Water", "Flying"],
    weakAgainst: ["Ground"],
    noEffectFrom: []
  },
  {
    name: "Grass",
    strongAgainst: ["Water", "Ground", "Rock"],
    weakAgainst: ["Fire", "Ice", "Poison", "Flying", "Bug"],
    noEffectFrom: []
  },
  {
    name: "Ice",
    strongAgainst: ["Grass", "Ground", "Flying", "Dragon"],
    weakAgainst: ["Fire", "Fighting", "Rock", "Steel"],
    noEffectFrom: []
  },
  {
    name: "Fighting",
    strongAgainst: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    weakAgainst: ["Flying", "Psychic", "Fairy"],
    noEffectFrom: []
  },
  {
    name: "Poison",
    strongAgainst: ["Grass", "Fairy"],
    weakAgainst: ["Ground", "Psychic"],
    noEffectFrom: []
  },
  {
    name: "Ground",
    strongAgainst: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    weakAgainst: ["Water", "Grass", "Ice"],
    noEffectFrom: ["Electric"]
  },
  {
    name: "Flying",
    strongAgainst: ["Grass", "Fighting", "Bug"],
    weakAgainst: ["Electric", "Ice", "Rock"],
    noEffectFrom: ["Ground"]
  },
  {
    name: "Psychic",
    strongAgainst: ["Fighting", "Poison"],
    weakAgainst: ["Bug", "Ghost", "Dark"],
    noEffectFrom: []
  },
  {
    name: "Bug",
    strongAgainst: ["Grass", "Psychic", "Dark"],
    weakAgainst: ["Fire", "Flying", "Rock"],
    noEffectFrom: []
  },
  {
    name: "Rock",
    strongAgainst: ["Fire", "Ice", "Flying", "Bug"],
    weakAgainst: ["Water", "Grass", "Fighting", "Ground", "Steel"],
    noEffectFrom: []
  },
  {
    name: "Ghost",
    strongAgainst: ["Psychic", "Ghost"],
    weakAgainst: ["Ghost", "Dark"],
    noEffectFrom: ["Normal", "Fighting"]
  },
  {
    name: "Dragon",
    strongAgainst: ["Dragon"],
    weakAgainst: ["Ice", "Dragon", "Fairy"],
    noEffectFrom: []
  },
  {
    name: "Dark",
    strongAgainst: ["Psychic", "Ghost"],
    weakAgainst: ["Fighting", "Bug", "Fairy"],
    noEffectFrom: ["Psychic"]
  },
  {
    name: "Steel",
    strongAgainst: ["Ice", "Rock", "Fairy"],
    weakAgainst: ["Fire", "Fighting", "Ground"],
    noEffectFrom: []
  },
  {
    name: "Fairy",
    strongAgainst: ["Fighting", "Dragon", "Dark"],
    weakAgainst: ["Poison", "Steel"],
    noEffectFrom: []
  }
];

export default typeChart;
