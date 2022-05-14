function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet", modelLoaded);
}

function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResults);
}

function modelLoaded(){
console.log("modelLoaded");
}

function gotResults(error,results){
  if (error){
console.error(error);
  }
  else{
    console.log(results);
  }
  document.getElementById("Object_result").innerHTML=results[0].label;
  document.getElementById("Accuracy_result").innerHTML=results[0].Confidence*100 + "%";
  
  var synth=window.speechSynthesis;
  utterThis=new SpeechSynthesisUtterance("Object detected is" + results[0].label)
  synth.speak(utterThis);
}
