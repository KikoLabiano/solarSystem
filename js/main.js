window.onload = function () {
  const SOLAR_SYSTEM_OBJECTS = [
    'mercurio',
    'venus',
    'tierra',
    'luna',
    'marte',
    'deimos',
    'phobos',
    'jupiter',
    'saturno',
    'urano',
    'neptuno'
  ];

  // var currentPercent = 0;
  // var showPercent = window.setInterval(function () {
  //   if (currentPercent < 100) {
  //     currentPercent += 1;
  //   } else {
  //     currentPercent = 0;
  //   }
  //   // Updates a div that displays the current percent
  //   console.log(currentPercent);
  // }, 40);

  // function findKeyframesRule(rule) {
  //   var ss = document.styleSheets;
  //   for (var i = 0; i < ss.length; ++i) {
  //     for (var j = 0; j < ss[i].cssRules.length; ++j) {
  //       if (ss[i].cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE && ss[i].cssRules[j].name == rule) {
  //         return ss[i].cssRules[j];
  //       }
  //     }
  //   }
  //   return null;
  // }

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
      SOLAR_SYSTEM_OBJECTS.forEach(solarSystemObject => {
        root.style.setProperty(
          `--${solarSystemObject}-speed`,
          Number(rs.getPropertyValue(`--${solarSystemObject}-speed`).slice(0, -1)) * 1.25 + 's'
        );
      });
    });

    //Forward
    const accelerateAnimation = document.getElementById('accelerateAnimation');
    accelerateAnimation.addEventListener('click', () => {
      SOLAR_SYSTEM_OBJECTS.forEach(solarSystemObject => {
        root.style.setProperty(
          `--${solarSystemObject}-speed`,
          Number(rs.getPropertyValue(`--${solarSystemObject}-speed`).slice(0, -1)) / 1.25 + 's'
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
