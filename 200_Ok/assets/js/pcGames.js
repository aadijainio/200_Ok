const gamesData = [
  {
    name: "Game 1",
    description: "Description for Game 1.",
    image: "assets/img/pc.jpg",
    price: "$49.99",
    link: "#",
  },
  {
    name: "Game 2",
    description:
      "Description for Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjjjjrwegiuaghvuiahguirahgidashgkvhuiadhguasdhguhaughruighreih",
    image: "assets/img/pc.jpg",
    price: "$39.99",
    link: "#",
  },
];

function createGameCard(game) {
  const card = document.createElement("div");
  card.classList.add("game-card");
  card.innerHTML = `
    <img src="${game.image}" alt="${game.name}">
    <h2 class="game-title">${game.name}</h2>
    <p class="game-description">${truncateDescription(game.description)}</p>
    <p class="game-price">${game.price}</p>
    <a href="${game.link}" class="read-more-button">Read More</a>
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

//for development
// const addButton = document.getElementById("add-game-button");
// addButton.addEventListener("click", addGameCardsToContainer);
