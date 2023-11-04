const gamesData = [
  {
    name: "ToonTanks",
    description: "Get ready for intense tank warfare in our action-packed game! Take control of a mighty tank and strategically eliminate unyielding orange turret tanks. Each foe requires two precise shots, putting your skills to the test. Can you conquer the battlefield and emerge as the ultimate tank commander? Controls: \n W A S D - movements \n Left mouse click - Fire \n Alt + f4 - Restart",
    image: "assets/img/ToonTanksTB.png",
    size: "321 MB",
    link: "https://mega.nz/folder/hP9RmYKa#Ltt0uy8KgZhBrJK0HjEm1Q",
  },
];

function createGameCard(game) {
  const card = document.createElement("div");
  card.classList.add("game-card");
  card.innerHTML = `
    <img class="game-img" src="${game.image}" alt="${game.name}">
    <h2 class="game-title">${game.name}</h2>
    <p class="game-description">${truncateDescription(game.description)}</p>
    <p class="game-size">${game.size}</p>
    <a  class="read-more-button">Read More</a>
    <a href="${
      game.link
    }"><img class="download-button"  width="48px" height="48px" src="https://img.icons8.com/flat-round/64/downloading-updates--v1.png" alt="download"/></a>
  `;
  return card;
}

function truncateDescription(description) {
  if (description.length > 100) {
    return description.slice(0, 100) + "...";
  }
  return description;
}

function expandDescription(card, originalDescription) {
  card.querySelector(".game-description").textContent = originalDescription;
}

function addGameCardsToContainer() {
  const gameContainer = document.getElementById("game-container");
  gamesData.forEach((game) => {
    const card = createGameCard(game);
    gameContainer.appendChild(card);

    const readMoreButton = card.querySelector(".read-more-button");
    const originalDescription = game.description;
    readMoreButton.addEventListener("click", () => {
      expandDescription(card, originalDescription);
      readMoreButton.style.display = "none";
    });
  });
}

window.addEventListener("load", addGameCardsToContainer);
