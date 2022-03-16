function preload(){

}

function setup(){
    canvas=createCanvas(150,150);
    canvas.center();
   video=createCapture(VIDEO);
}

function draw(){

}

function take_snapshot(){
    save("MyFilterPicture.png");
}
