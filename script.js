const interestCards = document.querySelectorAll("[data-interest]");

const closeAllCards = () => {
  interestCards.forEach((card) => {
    const button = card.querySelector(".interest-toggle");
    const detail = card.querySelector(".interest-detail");

    if (!button || !detail) {
      return;
    }

    button.setAttribute("aria-expanded", "false");
    detail.hidden = true;
    card.classList.remove("is-open");
  });
};

const toggleCard = (card) => {
  const button = card.querySelector(".interest-toggle");
  const detail = card.querySelector(".interest-detail");

  if (!button || !detail) {
    return;
  }

  const isExpanded = button.getAttribute("aria-expanded") === "true";
  closeAllCards();

  if (!isExpanded) {
    button.setAttribute("aria-expanded", "true");
    detail.hidden = false;
    card.classList.add("is-open");
  }
};

interestCards.forEach((card) => {
  card.addEventListener("click", () => {
    toggleCard(card);
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    toggleCard(card);
  });
});
