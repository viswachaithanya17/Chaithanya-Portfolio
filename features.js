import { portfolioItemsByCategory, portfolioItems } from './portfolio.js';

const categoryButtons = document.querySelectorAll('.category-btn');
const carousel = document.querySelector('.carousel');

let currentCategory = "All";

function renderImages(category) {
  carousel.innerHTML = '';

  let itemsToShow = category === "All" ? portfolioItems : (portfolioItemsByCategory[category] || []);

  itemsToShow.forEach(item => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('image-wrapper');

    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.alt;

    wrapper.appendChild(img);
    carousel.appendChild(wrapper);

    wrapper.addEventListener('click', () => openLightbox(item.src, item.alt));
  });
}

categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderImages(currentCategory);
  });
});

renderImages(currentCategory);

// Lightbox implementation (basic)
const lightbox = document.createElement('div');
lightbox.style.cssText = `
  position: fixed; top:0; left:0; width:100vw; height:100vh;
  background: rgba(0,0,0,0.8);
  display: flex; align-items: center; justify-content: center;
  opacity: 0; pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 9999;
`;
const lightboxImg = document.createElement('img');
lightboxImg.style.cssText = `
  max-width: 90vw; max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0,0,0,0.7);
`;
lightbox.appendChild(lightboxImg);
document.body.appendChild(lightbox);

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.style.opacity = '1';
  lightbox.style.pointerEvents = 'auto';
}

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.opacity = '0';
    lightbox.style.pointerEvents = 'none';
    lightboxImg.src = '';
  }
});
