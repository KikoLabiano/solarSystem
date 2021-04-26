window.onload = function () {
  const ASTRO_TYPES = { star: 'Star', planet: 'Planet', dwarfPlanet: 'Dwarf planet', satellite: 'Satellite' };
  const ASTRO_INFO = {
    sol: {
      objectType: ASTRO_TYPES.star,
      size: 100,
      type: 'Gaseoso',
      translationPeriod: 0,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    mercurio: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Rocoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    venus: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Rocoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    tierra: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Rocoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    luna: {
      objectType: ASTRO_TYPES.satellite,
      size: 5,
      type: 'Rocoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    marte: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Rocoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    deimos: {
      objectType: ASTRO_TYPES.satellite,
      size: 5,
      type: 'Rocoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    phobos: {
      objectType: ASTRO_TYPES.satellite,
      size: 5,
      type: 'Rocoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    jupiter: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Gaseoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    saturno: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Gaseoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    urano: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Gaseoso',
      translationPeriod: 27,
      rotationPeriod: 12,
      quote: 'sdfas...'
    },
    neptuno: {
      objectType: ASTRO_TYPES.planet,
      size: 5,
      type: 'Gaseoso',
      translationPeriod: 27,
      rotationPeriod: 120,
      quote:
        'sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf sdfas...asfdasdfasdfasdf asdf asdf asdf asdf asdf asdf asdf sdf asdf asdf asdf sadf '
    }
  };

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

  const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

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

  const showAstroInfo = astroObject => {
    console.log(ASTRO_INFO[astroObject]);
    const astroObjectTitle = document.getElementById('astroObjectTitle');
    const astroObjectThumbId = document.getElementById('astroObjectThumbId');
    const astroInfoDialog = document.getElementById('astroInfoDialog');
    const objectType = document.getElementById('objectType');
    const size = document.getElementById('size');
    const type = document.getElementById('type');
    const translationPeriod = document.getElementById('translationPeriod');
    const rotationPeriod = document.getElementById('rotationPeriod');
    const quote = document.getElementById('quote');

    if (getComputedStyle(astroInfoDialog).display === 'none') {
      astroInfoDialog.style.display = 'block';
    }
    astroObjectTitle.innerText = capitalize(astroObject);
    astroObjectThumbId.src = `../img/${astroObject}.png`;
    objectType.innerText = ASTRO_INFO[astroObject].objectType;
    size.innerText = ASTRO_INFO[astroObject].size;
    type.innerText = ASTRO_INFO[astroObject].type;
    translationPeriod.innerText = ASTRO_INFO[astroObject].translationPeriod;
    rotationPeriod.innerText = ASTRO_INFO[astroObject].rotationPeriod;
    quote.innerText = ASTRO_INFO[astroObject].quote;
  };

  const controlButtonsBinding = () => {
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

  const solarSystemObjectsButtonsBinding = () => {
    const orbits = document.getElementsByClassName('orbita');
    [...orbits].forEach(orbit => {
      orbit.addEventListener('click', () => {
        showAstroInfo(orbit.id.replace(/Orbita/gi, ''));
      });
    });
    const sun = document.getElementById('sol');
    sun.addEventListener('click', () => showAstroInfo('sol'));
  };

  const buttonsBinding = () => {
    controlButtonsBinding();
    solarSystemObjectsButtonsBinding();
  };

  // root.style.setProperty('--mercurio-speed', Number(rs.getPropertyValue('--mercurio-speed').slice(0, -1)) / 3 + 's');

  let NUMBER_STARS = 200;

  if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    NUMBER_STARS = 40;
  }
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
