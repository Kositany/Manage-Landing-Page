const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click',()=>{
    primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', true)
    : navToggle.setAttribute('aria-expanded', false);
    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})

const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: true,
  dots: false,
  arrows: true,
  centerMode: true,
});
