import Phaser from 'phaser';
import Scene1 from './Scene1';
import Scene2 from './Scene2';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [Scene1, Scene2]
};

const game = new Phaser.Game(config);

export default game;