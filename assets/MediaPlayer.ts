class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>
    status: string;

    constructor(config, status) {
        this.media = config.el;
        this.status = status;
        this.plugins = config.plugins || [];

        this.initPlugins();
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    play() {
        this.media.play();
        this.status = "play";
    }
    pause() {
        this.media.pause();
        this.status = "pause";
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
}

export default MediaPlayer;