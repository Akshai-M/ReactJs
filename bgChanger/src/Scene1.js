import Phaser from 'phaser';

export default class Scene1 extends Phaser.Scene {
    constructor() {
        super('Scene1');
    }

    preload() {
        this.load.image('ship3', 'src/assets/images/ship3.png');
        this.load.image('ship2', 'src/assets/images/ship2.png');
        this.load.image('bg', 'src/assets/images/bg.jpg');
    }

    create() {
        this.scene.start('Scene2');
    }
}