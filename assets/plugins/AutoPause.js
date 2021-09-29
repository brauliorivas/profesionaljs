class AutoPause {
    constructor() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
    }
    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold
        })

        observer.observe(this.player.media)
    }

    handleIntersection(entries) {
        const entry = entries[0];
        entry.isIntersecting ? this.player.play() : this.player.pause();
    }
}

export default AutoPause;