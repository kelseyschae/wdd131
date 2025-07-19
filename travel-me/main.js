// === Random Travel Quotes ===
const quotes = [
    "Travel makes one modest. You see what a tiny place you occupy in the world. – Gustave Flaubert",
    "The world is a book, and those who do not travel read only one page. – Saint Augustine",
    "Take only memories, leave only footprints. – Chief Seattle",
    "Life is short and the world is wide. – Simon Raven",
    "Wherever you go, go with all your heart. – Confucius"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }
  
  // === Add to Bucket List ===
  function addToBucketList(destination) {
    let bucketList = JSON.parse(localStorage.getItem("bucketList")) || [];
  
    if (!bucketList.includes(destination)) {
      bucketList.push(destination);
      localStorage.setItem("bucketList", JSON.stringify(bucketList));
      alert(`${destination} was added to your bucket list!`);
    } else {
      alert(`${destination} is already in your bucket list.`);
    }
  }
  
  // === Dynamically add "Add to Bucket List" buttons ===
  document.addEventListener("DOMContentLoaded", () => {
    generateQuote(); // Show a quote on page load
  
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const destination = card.querySelector("h3").textContent;
  
      const addButton = document.createElement("button");
      addButton.textContent = "Add to Bucket List";
      addButton.classList.add("add-btn");
      addButton.onclick = () => addToBucketList(destination);
  
      card.appendChild(addButton);
    });
  });
  