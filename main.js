Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:900
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img  id="captured_img" src="'+data_uri+'"/>'
});
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/unhWA1XNj/model.json',modelLoaded);
function modelLoaded(){
    console.log('model is loaded');
}

function check(){
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log("results")
    document.getElementById("result-object-name").innerHTML = results[0].label;
    document.getElementById("result-object-acurracy").innerHTML = results[0].confidence.toFixed(3);
}
}

