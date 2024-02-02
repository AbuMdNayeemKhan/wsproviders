//====================NAV SECTION START====================//
const togoller = document.querySelector(".common__nav--wrapper--togoller");
const navbar = document.querySelector(".common__nav--wrapper--nav");
const navbtn = document.querySelector(".common__nav--wrapper--btn");
togoller.addEventListener("click", ()=>{
  togoller.classList.toggle("active");
  navbar.classList.toggle("active");
  navbtn.classList.toggle("active");
});
//====================NAV SECTION ENDED====================//

//====================HOME TRUSTED START====================//
var swiper = new Swiper(".home__trusted--slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
      autoplay: true,
    },
    1080: {
      slidesPerView: 4,
      spaceBetween: 50,
      loop: true,
      autoplay: true,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 50,
      loop: true,
      autoplay: true,
    },
    1366: {
      slidesPerView: 5,
      spaceBetween: 50,
      loop: true,
      autoplay: true,
    }
  },
});
//====================HOME TRUSTED ENDED====================//

//====================HOME TESTIMONIAL START====================//
var swiper = new Swiper(".home__testimonial--slider", {
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//====================HOME TESTIMONIAL ENDED====================//

//====================HOME WORK START====================//
var swiper = new Swiper(".home__work--slider--slider", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: true,
  loop: true,
  breakpoints: {
    966: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 4,
    }
  }
});
//====================HOME WORK START====================//

//====================HOME FAQ START====================//
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    question.parentElement.classList.toggle('expanded');
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  });
});
//====================HOME FAQ ENDED====================//


const section = document.querySelector(".home__growth--counter");
const counts = document.querySelectorAll(".count");
const targetCounts = [2, 5, 50, 5, 55]; // Update with your target counts
let currentCounts = [0, 0, 0, 0, 0];
let animationStarted = false;
function updateCounts() {
  counts.forEach((count, index) => {
    const target = targetCounts[index];
    const increment = target / 200; // Adjust the increment for smoother animation
    currentCounts[index] += increment;
    if (currentCounts[index] >= target) {
      currentCounts[index] = target;
    }
    count.textContent = Math.floor(currentCounts[index]);
  });
  if (!animationStarted) {
    animationStarted = true;
    requestAnimationFrame(updateCounts);
  } else if (!isSectionInView()) {
    animationStarted = false;
  } else {
    requestAnimationFrame(updateCounts);
  }
}
function isSectionInView() {
  const rect = section.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}
window.addEventListener("scroll", () => {
  if (isSectionInView() && !animationStarted) {
    animationStarted = true;
    updateCounts();
  }
});

//========
//====================HOME WHY START====================//
function changeTab(tabIndex) {
  const tabButtons = document.querySelectorAll('.home__why--content--tabs--btn');
  const tabPanels = document.querySelectorAll('.home__why--content--panel--cover');

  tabButtons.forEach((button, index) => {
    if (index === tabIndex) {
      button.classList.add('active');
      tabPanels[index].classList.add('active');
    } else {
      button.classList.remove('active');
      tabPanels[index].classList.remove('active');
    }
  });
}
//====================HOME WHY ENDED====================//

//====================AOS ANIMATION START====================//
  AOS.init();
//====================AOS ANIMATION ENDED====================//