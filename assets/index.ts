import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.getElementById('videobunny');
const button: HTMLElement = document.getElementById('playpause-button');
const mute: HTMLElement = document.getElementById('mute-button');

const player = new MediaPlayer({el: video, 
    plugins: [new AutoPlay
    ,new AutoPause
    ]
},'pause');

button.onclick = () => player.status == "pause" ? player.play() : player.pause();

mute.onclick = () => player.media.muted == true ? player.unmute() : player.mute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').catch(error => {
        console.log(error.message)
    });
}