function setup(){
    canvas=createCanvas(500,400)
    // canvas.position(490,290);
    canvas.center();   
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,500,400)
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects"
}
function modelLoaded() {
    console.log("Model loaded")
    status = true;
    objectDetector.detect(img, gotResult);
}