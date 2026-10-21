const hero = document.querySelector(".hero");

const heroImages = [
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=85",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=85"
];

let currentImage = 0;

if (hero) {
  hero.style.setProperty(
    "--hero-image",
    `url("${heroImages[0]}")`
  );

  setInterval(() => {
    currentImage = (currentImage + 1) % heroImages.length;

    const nextImage = heroImages[currentImage];

    hero.style.setProperty(
      "--next-hero-image",
      `url("${nextImage}")`
    );

    hero.classList.remove("changing");

    // Restart the fade animation.
    void hero.offsetWidth;

    hero.classList.add("changing");

    setTimeout(() => {
      hero.style.setProperty(
        "--hero-image",
        `url("${nextImage}")`
      );

      hero.classList.remove("changing");
    }, 1500);
  }, 6000);
}
