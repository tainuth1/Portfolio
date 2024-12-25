// ============Nav Bar
const bar = document.getElementById("bar");
const menu = document.getElementById("menu");

bar.addEventListener("click", () => {
  if (menu.classList.contains("md:h-0")) {
    menu.classList.remove("md:h-0");
    menu.classList.add("md:h-auto");
  } else {
    menu.classList.remove("md:h-auto");
    menu.classList.add("md:h-0");
  }
});

// ============Fixed Nav bar
const navbar = document.querySelector(".nav-bar");

function handleScroll() {
  if (window.scrollY > 100) {
    navbar.classList.add("fixed", "bg-white", "shadow");
  } else {
    navbar.classList.remove("fixed", "bg-white", "shadow");
  }
}
window.addEventListener("scroll", handleScroll);

// =============Skills Tabs
const tabs = document.querySelectorAll(".tab_btn");
const skillCards = document.querySelectorAll(".skill-card");

function filterSkills(category, element) {
  tabs.forEach((tab) =>
    tab.classList.remove("active-tab", "bg-blue-600", "text-white")
  );

  element.classList.add("active-tab", "bg-blue-600", "text-white");

  skillCards.forEach((card) => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Default to 'all' tab on page load
window.onload = () =>
  filterSkills("all", document.querySelector(".active-tab"));

// =============Slider
const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;
const visibleCards = 3; // Show 3 cards at once
const totalCards = cards.length;
const cardWidth = cards[0].offsetWidth + 48; // width + margin (consider spacing)

// Function to update the slider position
function updateSliderPosition() {
  const offset = -currentIndex * cardWidth;
  slider.style.transform = `translateX(${offset}px)`;
}
nextBtn.addEventListener("click", () => {
  if (currentIndex < totalCards - visibleCards) {
    currentIndex++;
    updateSliderPosition();
  }
});
prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});
