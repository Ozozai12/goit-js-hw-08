var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});


player.on(
  'timeupdate',
  throttle(function (data) {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
  }, 1000)
);



player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
