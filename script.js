const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.textContent = '🩶💛';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '0';
  heart.style.fontSize = `${Math.random() * 20 + 20}px`;
  heart.style.animationDuration = `${Math.random() * 2 + 4}s`;
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 600);
