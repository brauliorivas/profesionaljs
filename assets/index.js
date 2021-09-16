const video = document.querySelector('video');
const button = document.querySelector('button')

function MediaPlayer(config, status) {
    this.media = config.el;
    this.status = status;
}

MediaPlayer.prototype.play = function() {
    this.media.play();
    this.status = "play";
}

MediaPlayer.prototype.pause = function() {
    this.media.pause();
    this.status = "pause";
}

const player = new MediaPlayer({el: video}, 'pause')
button.onclick = () => player.status == "pause" ? player.play() : player.pause();
      