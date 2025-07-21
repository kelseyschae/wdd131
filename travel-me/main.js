//Random quotes
const quotes = [
    "Travel makes one modest. You see what a tiny place you occupy in the world. – Gustave Flaubert",
    "The world is a book, and those who do not travel read only one page. – Saint Augustine",
    "Take only memories, leave only footprints. – Chief Seattle",
    "Life is short and the world is wide. – Simon Raven",
    "Wherever you go, go with all your heart. – Confucius"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
      quoteElement.textContent = quotes[randomIndex];
    }
  }
  
  //Bucket list
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
  
  //DOM content loaded
  document.addEventListener("DOMContentLoaded", () => {
    // Show a quote on load
    generateQuote();
  

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      const destination = card.querySelector("h3")?.textContent;
  
      if (destination) {
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Bucket List";
        addButton.classList.add("add-btn");
  
        addButton.addEventListener("click", () => addToBucketList(destination));
        card.appendChild(addButton);
      }
    });
  
 
    const container = document.getElementById("bucketListContainer");
    const clearBtn = document.getElementById("clearListBtn");
  
    if (container && clearBtn) {
      function renderBucketList() {
        const list = JSON.parse(localStorage.getItem("bucketList")) || [];
        container.innerHTML = "";
  
        if (list.length === 0) {
          container.innerHTML = "<p>Your bucket list is empty. Add some destinations!</p>";
          clearBtn.style.display = "none";
          return;
        }
  
        list.forEach(destination => {
          const li = document.createElement("li");
          li.textContent = destination;
          container.appendChild(li);
        });
  
        clearBtn.style.display = "inline-block";
      }
  
      clearBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear your entire bucket list?")) {
          localStorage.removeItem("bucketList");
          renderBucketList();
        }
      });
  
      renderBucketList();
    }
  });
  
  
