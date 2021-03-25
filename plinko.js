class plinko{
    constructor(x,y,r){
    var options={
        isStatic:true
    }
this.body=Bodies.circle(x,y,r,options)
this.r=r
World.add(world,this.body)
    }
display(){
pos=this.body.position;
ellipseMode(CENTER)
fill(white)
ellipse(pos.x,pos.y,this.r)
}
}