import Phaser from 'phaser';

export default class Scene2 extends Phaser.Scene {
    constructor() {
        super('Scene2');
    }

    create() {
        // Load assets
        this.ship3 = this.add.sprite(100, 300, 'ship3');
        this.ship2 = this.add.sprite(400, 300, 'ship2');
        this.bg = this.add.image(400, 300, 'bg');

        // Make ship2 stationary
        this.ship2.setImmovable(true);

        // Set up camera follow
        this.cameras.main.startFollow(this.ship3);

        // Set up proximity check and message display
        this.hasShownMessage = false;
    }

    update() {
        // Check if ship3 is near ship2
        const distance = Phaser.Math.Distance.Between(this.ship3.x, this.ship3.y, this.ship2.x, this.ship2.y);
        if (distance < 50 && !this.hasShownMessage) {
            this.add.text(300, 100, 'Hi!', { fontSize: '32px', fill: '#00ff00' }).setOrigin(0.5);
            this.hasShownMessage = true;
        }

        // Prevent ship3 from going off-screen
        if (this.ship3.x > this.bg.width - this.ship3.width / 2) {
            this.ship3.x = this.bg.width - this.ship3.width / 2;
        }
    }
}