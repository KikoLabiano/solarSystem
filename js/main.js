window.onload = function () {
  let root = document.querySelector(':root');
  var rs = getComputedStyle(root);
  // root.style.setProperty('--mercurio-speed', Number(rs.getPropertyValue('--mercurio-speed').slice(0, -1)) / 3 + 's');

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

  const playStopAnimation = document.getElementById('playStopAnimation');
  playStopAnimation.addEventListener('click', () => {
    if (playStopAnimation.classList.contains('paused')) {
      playStopAnimation.classList.remove('paused');
      const orbitas = document.getElementsByClassName('orbita');
      [...orbitas].forEach(orbita => {
        orbita.style['animation-play-state'] = 'running';
      });
    } else {
      playStopAnimation.classList.add('paused');
      const orbitas = document.getElementsByClassName('orbita');
      [...orbitas].forEach(orbita => {
        orbita.style['animation-play-state'] = 'paused';
      });
    }
  });
};
