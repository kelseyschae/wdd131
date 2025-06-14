const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
   
    attacked() {
      if (this.health >= 20) {
        this.health -= 20;
        return "Snortleblat was attacked and lost 20 health!";
      } else {
        this.health = 0;
        return "Character Died";
      }
    },
    levelUp() {
      this.level += 1;
      this.health += 20;
      return "Snortleblat leveled up! Gained +1 level and +20 health.";
    }
  };
  
  function updateCard() {
    document.getElementById("characterImage").src = character.image;
    document.getElementById("characterImage").alt = character.name;
    document.getElementById("characterName").textContent = character.name;
    document.getElementById("class").textContent = character.class;
    document.getElementById("level").textContent = character.level;
    document.getElementById("health").textContent = character.health;
  }
  
  document.getElementById("attacked").addEventListener("click", () => {
    const message = character.attacked();
    updateCard();
    document.getElementById("log").textContent = message;
  });
  
  document.getElementById("levelup").addEventListener("click", () => {
    const message = character.levelUp();
    updateCard();
    document.getElementById("log").textContent = message;
  });
  
  updateCard(); // initialize card on load
  