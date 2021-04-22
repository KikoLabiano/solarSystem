window.onload = function () {
  const PLANETS = ['mercurio', 'venus', 'tierra', 'marte', 'jupiter', 'saturno', 'urano', 'neptuno'];

  const buttonsBinding = () => {
    let root = document.querySelector(':root');
    var rs = getComputedStyle(root);
    //Play/pause
    const playStopAnimation = document.getElementById('playStopAnimation');
    const playStopAnimationIcon = document.getElementById('playStopAnimationIcon');
    playStopAnimation.addEventListener('click', () => {
      if (playStopAnimation.classList.contains('paused')) {
        playStopAnimation.classList.remove('paused');
        playStopAnimation.classList.remove('activeButton');
        playStopAnimationIcon.classList.remove('fa-play');
        playStopAnimationIcon.classList.add('fa-pause');
        const orbits = document.getElementsByClassName('orbita');
        [...orbits].forEach(orbit => {
          orbit.style['animation-play-state'] = 'running';
        });
      } else {
        playStopAnimation.classList.add('paused');
        playStopAnimation.classList.add('activeButton');
        playStopAnimationIcon.classList.remove('fa-pause');
        playStopAnimationIcon.classList.add('fa-play');
        const orbits = document.getElementsByClassName('orbita');
        [...orbits].forEach(orbit => {
          orbit.style['animation-play-state'] = 'paused';
        });
      }
    });

    //Slow down
    const slowAnimation = document.getElementById('slowAnimation');
    slowAnimation.addEventListener('click', () => {
      PLANETS.forEach(planet => {
        root.style.setProperty(
          `--${planet}-speed`,
          Number(rs.getPropertyValue(`--${planet}-speed`).slice(0, -1)) * 10 + 's'
        );
      });
    });
  };

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
  buttonsBinding();
};
