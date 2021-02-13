function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(300, 300);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Pz8Ayh9ro/model.json', modeLoaded);
}

function modeLoaded() {
    console.log("model Loaded");
}


function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }

}