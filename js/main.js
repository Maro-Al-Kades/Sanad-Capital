/* ===========================================================
  Toggle Navbar Links
==========================================================*/
let toggleBtn = document.querySelector(".toggle");
let toggleIcon = document.querySelector(".toggle i");
let navLinks = document.querySelector(".links-mobile");
let nav = document.querySelector(".nav");

toggleBtn.onclick = function () {
  toggleIcon.classList.toggle("fa-bars");
  toggleIcon.classList.toggle("fa-times");
  navLinks.classList.toggle("collapse");
};

/* ===========================================================
change background nav when scroll
==========================================================*/
let navbar = document.querySelector(".nav");
let logo = document.getElementById("logo");

window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-active");
    logo.setAttribute("src", "assets/images/logo.png");
  } else {
    navbar.classList.remove("nav-active");
    logo.setAttribute("src", "assets/images/sanad-logo.png");
  }
};

// ========================== Invest cards controller ============================
const prevBtn = document.querySelector(".secondary-arrow-btn");
const nextBtn = document.querySelector(".primary-arrow-btn");
const cardListContent = document.querySelector(".invest-cards ul");
const cardListContainer = document.querySelector(".cards-container");
const cards = document.querySelectorAll(".card");

let cardIndex = 0;
const cardWidth = cards[0].offsetWidth;
const cardMargin = 20;
const cardListContentWidth =
  cardWidth * cards.length + cardMargin * (cards.length - 1);
cardListContent.style.width = `${cardListContentWidth}px`;

prevBtn.addEventListener("click", () => {
  if (cardIndex > 0) {
    cardIndex--;
    cardListContainer.style.transform = `translateX(${
      cardIndex * (cardWidth + cardMargin)
    }px)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (cardIndex < cards.length - 1) {
    cardIndex++;
    cardListContainer.style.transform = `translateX(${
      cardIndex * (cardWidth + cardMargin)
    }px)`;
  }
});

let currentCardIndex = 0;
let currentCardLeft = 0;

function updateCardPosition() {
  currentCardLeft = cards[currentCardIndex].offsetLeft;
  cardList.scrollTo({
    left: currentCardLeft,
    behavior: "smooth",
  });
}

function showPrevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateCardPosition();
  }
}

function showNextCard() {
  if (currentCardIndex < cards.length - 1) {
    currentCardIndex++;
    updateCardPosition();
  }
}