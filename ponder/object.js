const ditto = {
    id: 132,
    name: "ditto",
    type: "normal",
    abilities: ["Limber", "Imposter"],
    base_experience: 101,
    height: 3,
    weight: 40,
    stats: {
      hp: 48,
      attack: 48,
      defense: 48,
      special_attack: 48,
      special_defense: 48,
      speed: 48
    },
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    transform: function () {
      return this.sprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png";
    }
  };
  
  document.getElementById("name").textContent = ditto.name; 
  document.getElementById("ability").textContent = "Ability: " + ditto.abilities[1];
  
  const imgElement = document.getElementById("ditto");
  imgElement.src = ditto.sprite;
  
  imgElement.addEventListener("click", function () {
    imgElement.src = ditto.transform();
  });
