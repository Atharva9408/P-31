const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[];
var G1;
var man,manimg;


function preload(){
    manimg=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")
}

function setup(){
   var canvas = createCanvas(1600,700);
   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);
if(frameCount%100===0){
for(var i=0; i<100; i++){
    var d=new Drop(random(0,1600),random(0,700))
    drops.push(d);
}
}
G1=new Ground(width/2,height-45,width,90)
man=createSprite(width/2,height-330,100,100);
man.addAnimation("Man",manimg);
man.scale=0.7;
}

function draw(){
    background("black")
for(var i=0; i<100; i++){
    drops[i].display();
    drops[i].update();
}
G1.display();
drawSprites();
}
