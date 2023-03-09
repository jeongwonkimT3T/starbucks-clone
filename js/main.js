const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus(); //searchInputEl 요소를 포커스 하겠다는 의미
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

const badgeEl = document.querySelector("header .badges");

// _.throttle(콜백함수, 시간)
window.addEventListener("scroll", _.throttle( () => {
  console.log(window.scrollY)
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
  });
}
}, 300));
