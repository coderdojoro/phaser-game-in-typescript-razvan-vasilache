import 'phaser';
export default class Hero extends Phaser.GameObjects.Sprite {
    rightKey: Phaser.Input.Keyboard.Key;
    leftKey: Phaser.Input.Keyboard.Key;
    downtKey: Phaser.Input.Keyboard.Key;

    constructor(scene, x, y) {
        super(scene, x, y, 'idle-e-spritesheet', 0);
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.anims.create({
            key: 'idle-e-anim',
            frames: this.anims.generateFrameNumbers('idle-e-spritesheet', {}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'walk-e-anim',
            frames: this.anims.generateFrameNumbers('walk-e-spritesheet', {}),
            frameRate: 10,
            repeat: -1
        });

        this.rightKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.leftKey = this.scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        this.anims.play('idle-e-anim');
        //this.setScale(1.5);
    }

    preUpdate(time, delta) {
        super.preUpdate(time, delta);
        (this.body as Phaser.Physics.Arcade.Body).setVelocity(0);
        if (this.rightKey.isDown) {
            (this.body as Phaser.Physics.Arcade.Body).setVelocityX(175);
            this.anims.play('walk-e-anim', true);
            this.setFlipX(false);
        } else {
            this.anims.play('idle-e-anim', true);
        }
        if (this.leftKey.isDown) {
            (this.body as Phaser.Physics.Arcade.Body).setVelocityX(-175);
            this.anims.play('walk-e-anim', true);
            this.setFlipX(true);
        } else {
            this.anims.play('idle-e-anim', true);
     
        }
        
    }
}
