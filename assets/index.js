import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector('video');
const button = document.getElementById('playpause-button');
const mute = document.getElementById('mute-button');

const player = new MediaPlayer({el: video, 
    plugins: [new AutoPlay(), new AutoPause()]
},'pause');

button.onclick = () => player.status == "pause" ? player.play() : player.pause();

mute.onclick = () => player.media.muted == true ? player.unmute() : player.mute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(error => {
        console.log(error.message)
    });
}