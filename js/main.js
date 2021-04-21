window.onload = function () {
  const NUMBER_STARS = 200;
  const STAR_TYPES = ['estrellaMini', 'estrellaMediana', 'estrellaGrande'];

  const generateStars = () => {
    const body = document.getElementById('universo');
    for (let i = 0; i < NUMBER_STARS; i++) {
      const star = document.createElement('span');
      star.className += `estrella ${STAR_TYPES[Math.floor(Math.random() * 3)]}`;
      star.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
      star.style.top = Math.floor(Math.random() * 1200) + 'px';
      body.appendChild(star);
    }
  };

  generateStars();
};
