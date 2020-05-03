const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, friend;
var friend2;
var backgroundImg,platform;
var me, slingShot;
var log1,log2,log3,log4,log5;
var log7,log8,log9,log10,log11;
var box2,box3,box4,box5,box6,box7,box8,box9,box10;
var friend3,friend4,friend5,friend6;
var logs;
var log100;
var score=0;

function preload() {
    backgroundImg = loadImage("sprites/bg.webp");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    friend = new Friend(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    friend2 = new Friend(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    me = new Me(200,50);
    logs = new Log(510,130,300,PI/10);

 friend5 = new Friend(340,380);
// friend6 = new Friend(750,120);
    box6 = new Box(390,320,70,70);
    box7 = new Box(620,320,70,70);
    box8 = new Box(390,160,70,70);
    box9 = new Box(620,160,70,70);
    box10 = new Box(620,130,70,70);

    friend3 = new Friend(510,380);
   friend4 = new Friend(1000,370);
log100 = new Log(1100,390,210,-PI/7);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(me.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    text("The bug that has been fixed: When space is pressed, the friend directly comes back to the slingshot",250,50);
    //strokeWeight(4);
    //text("Score  " + score, width-300, 50);
    box1.display();
    box2.display();
    ground.display();
    friend.display();
    log1.display();

    box3.display();
    box4.display();
    friend2.display();
    log3.display();

    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    friend3.display();
    friend4.display();
    friend5.display();
   // friend6.display();
    log4.display();
    log5.display();
logs.display();
    me.display();
    platform.display();
    //log6.display();
    slingshot.display();    
    log100.display();
   // score.display();
}

function mouseDragged(){
    Matter.Body.setPosition(me.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32 && me.body.speed<1){
      
       slingshot.attach(me.body);
   Matter.Body.setPosition(me.body,{x:200, y:50});
}
}