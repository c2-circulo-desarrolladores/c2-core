function initHeroFade() {
  const img = document.querySelector(".hero-image");
  if (!img) return;

  const fadeEnd = 400; // px de scroll hasta opacidad 0
  const parallaxFactor = 0.3;

  const onScroll = () => {
    const y = window.scrollY;
    const opacity = Math.max(1 - y / fadeEnd, 0);
    const translate = y * parallaxFactor;

    img.style.opacity = opacity;
    img.style.transform = `translateY(${translate}px)`;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

if (typeof document$ !== "undefined") {
  // Material usa instant loading: este observable se dispara
  // en la carga inicial y en cada navegación AJAX
  document$.subscribe(initHeroFade);
} else {
  document.addEventListener("DOMContentLoaded", initHeroFade);
}