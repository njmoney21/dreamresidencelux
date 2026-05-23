'use strict';

/* ============================================================
   NAVIGATION — sticky + mobile drawer
   ============================================================ */
const nav      = document.getElementById('nav');
const burger   = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ============================================================
   GALLERY MODAL
   ============================================================ */
const galleryModal     = document.getElementById('galleryModal');
const galleryOpenBtn   = document.getElementById('galleryOpen');
const galleryModalClose = document.getElementById('galleryModalClose');

function openGalleryModal() {
  galleryModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeGalleryModal() {
  galleryModal.classList.remove('active');
  document.body.style.overflow = '';
}

galleryOpenBtn.addEventListener('click', openGalleryModal);
galleryModalClose.addEventListener('click', closeGalleryModal);
galleryModal.addEventListener('click', e => {
  if (e.target === galleryModal) closeGalleryModal();
});

/* ============================================================
   GALLERY LIGHTBOX
   ============================================================ */
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox     = document.getElementById('lightbox');
const lbImg        = document.getElementById('lbImg');
const lbClose      = document.getElementById('lbClose');
const lbPrev       = document.getElementById('lbPrev');
const lbNext       = document.getElementById('lbNext');

const images = Array.from(galleryItems).map(el => ({
  src: el.querySelector('img').src,
  alt: el.querySelector('img').alt,
}));

let current = 0;

function openLightbox(idx) {
  current = idx;
  lbImg.src = images[current].src;
  lbImg.alt = images[current].alt;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function step(dir) {
  current = (current + dir + images.length) % images.length;
  lbImg.src = images[current].src;
  lbImg.alt = images[current].alt;
}

galleryItems.forEach((el, i) => el.addEventListener('click', () => openLightbox(i)));
lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => step(-1));
lbNext.addEventListener('click', () => step(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('active')) {
    if (e.key === 'Escape')     closeLightbox();
    if (e.key === 'ArrowLeft')  step(-1);
    if (e.key === 'ArrowRight') step(1);
  } else if (e.key === 'Escape' && galleryModal.classList.contains('active')) {
    closeGalleryModal();
  }
});

/* ============================================================
   SCORE BARS — animate on first scroll into view
   ============================================================ */
const bars = document.querySelectorAll('.score-bar-fill');
bars.forEach(bar => {
  bar.dataset.target = bar.style.width;
  bar.style.width = '0';
});

const scoreSection = document.querySelector('.reviews-score');
if (scoreSection) {
  const scoreObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        bars.forEach((bar, i) => {
          setTimeout(() => { bar.style.width = bar.dataset.target; }, i * 80);
        });
        scoreObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  scoreObs.observe(scoreSection);
}

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObs.observe(el));
