function Universo(galaxia, planetas, satelites) {
    this.galaxia = galaxia
    this.planetas = planetas
    this.satelites = satelites
}

const universo = new Universo('Via Láctea', ['Terra', 'Jupiter', 'Marte'], ['Lua', 'Phobos', 'Deimos'])
console.log(universo)
