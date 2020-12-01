class bin
{

    constructor(x,y,width,height)
    {
this.x=x;
this.y=y;
this.width = width
this.height = height
var options={isStatic: true}
this.body=Bodies.rectangle(this.x, this.y, width, height,options)
World.add(world, this.body);
super(x,y),50,50;
this.image = loadImage("dustbin.png");
}
display()
{
 

    push()
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()

    }



}