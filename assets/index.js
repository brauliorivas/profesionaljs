import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const button = document.getElementById('playpause-button');
const mute = document.getElementById('mute-button');

const player = new MediaPlayer({el: video, 
    // plugins: [new AutoPlay]
},'pause');

button.onclick = () => player.status == "pause" ? player.play() : player.pause();

mute.onclick = () => player.media.muted == true ? player.unmute() : player.mute();