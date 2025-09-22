// Add animation to CTA button
const shopBtn = document.getElementById("shopBtn");

shopBtn.addEventListener("click", () => {
  alert("💖 Thanks for visiting Glossy Glam! Our shop is coming soon. 💄");
});

// Add random sparkle effect on load
document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  body.style.transition = "background 2s ease-in-out";

  setInterval(() => {
    const colors = [
      "linear-gradient(135deg, #ffb6c1, #ffe4e1, #ffc0cb)",
      "linear-gradient(135deg, #fff0f5, #ffe4e1, #ff69b4)",
      "linear-gradient(135deg, #ffcccc, #ffb6c1, #ff69b4)"
    ];
    body.style.background = colors[Math.floor(Math.random() * colors.length)];
  }, 5000);
});
