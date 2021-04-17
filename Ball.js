class Ball{
constructor(x,y,r){
var options={
'isStatic':false,
'friction':1,
'restitution': 1,
'density': 2.7
}
this.body=Bodies.circle(x,y,r,options);
this.radius=r;
this.image=loadImage("paper.png");
World.add(world,this.body);
}
display(){
    var posX =this.body.position.x;
    var posY =this.body.position.y;
    
      var angle = this.body.angle;
    push ()
    translate(posX,posY)
    rotate (angle)
    ellipseMode(RADIUS);
    //ellipse(0,0,this.radius);
  
imageMode(CENTER);
image(this.image, 0, 0,40,40);
    pop();
  


}

bounce(){
    Matter.Body.applyForce(ball.body,this.body.position,{x:95,y:95});

}

}