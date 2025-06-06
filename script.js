document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll("#logoCircle img");
  const total = logos.length;
  const radius = 120; // distance from center

  logos.forEach((img, i) => {
    const angle = (360 / total) * i;
    const rad = angle * (Math.PI / 180);
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    img.style.transform = `translate(${x}px, ${y}px)`;
    
  });
});
