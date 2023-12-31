class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = 16;

    this.directionUpdate = {
      "up": ["y", -1],
      "down": ["y", 1],
      "left": ["x", -1],
      "right": ["x", 1],
    }
  }

  updatePosition() {
    if(this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction]
    }
    }
}