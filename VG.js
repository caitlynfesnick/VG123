hi
let game;
let platforms;  // a group of platform objects the player will jump on
let player; // the actual player controlled sprite
let cursors;
let platformCount = 0;
let emitter;
let particles;
let gameOptions = {
  width: 480,
  height: 640,
  gravity: 800
}

class JumpScene extends Phaser.Scene {
  constructor() {
    super({ key: 'JumpScene' })
  }

  preload(){
    this.load.image('platform', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Jump/platform.png');
    this.load.image('stripe', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/Codey+Jump/stripe.png');
    this.load.spritesheet("codey", "https://blogs.sas.com/content/sastraining/files/2015/03/black_background.png", {
      frameWidth: 90,
      frameHeight: 90
    });
  }

