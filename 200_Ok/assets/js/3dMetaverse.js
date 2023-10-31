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
      "Description for Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguis r Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguisr Game 2. ifhodjsfgvpa;reuogherupiaghuiaerghurishaguiaheugiahs\ndjjjjjjjjjjjjjjjjjghufdshguijsdhguiserhguis erhgushuihbuseigbhseruigbuserijbgusjreigbuserrsuiharutighauierghuiajbrguijabgujbargeujbaerujgburea\nbguaebrgujbarujebgujabeguijparbuipsgbauergbuaerurjjjrwegiuaghvuiahguirahgidashgkvhuiadhguasdhguhaughruighreih ",
    image: "assets/img/pc.jpg",
    price: "$39.99",
    link: "#",
  },
];

function createGameCard(game) {
  const card = document.createElement("div");
  card.classList.add("game-card");
  card.innerHTML = `
    <img class="game-img" src="${game.image}" alt="${game.name}">
    <h2 class="game-title">${game.name}</h2>
    <p class="game-description">${truncateDescription(game.description)}</p>
    <p class="game-price">${game.price}</p>
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
