class Paper {
    constructor(x, y) {
      var options = {
        'isStatic':false,
        'density':1.2,
        'friction':0.5,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 13, 13, options);
      this.width = 13;
      this.height = 13;
      World.add(world, this.body);
      this.image = loadImage("sprites/paper.png");
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };