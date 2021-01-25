class Ground
{
    constructor(x,y,width,height)
    {
    var options={
        restitution:1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    
    world .add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rect(pos.x,pos.y,this.width,this.height);

}