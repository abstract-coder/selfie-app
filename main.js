var sp_recog = window.webkitSpeechRecognition;
var agent_listen= new sp_recog();


function my_start(){
document.getElementById("textbox").innerHTML= "";
agent_listen.start();
}

agent_listen.onresult= function (event){
    console.log(event);
    var transcript = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML= transcript;
    if(transcript == "take my selfie"){
        Webcam.attach(my_cam);
        my_speak();
    }
}

function my_speak(){
    var agent_speak = window.speechSynthesis;
    speak_data= "Taking your selfie in 5 seconds";
    var utter_data= new SpeechSynthesisUtterance(speak_data);
    agent_speak.speak(utter_data);
    my_image();
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

my_cam= document.getElementById("camera");

function my_image(){
    Webcam.snap(function(my_picture){
        console.log("taking pic");
        document.getElementById("result").innerHTML = "<img id = 'my_picture' src = '"+ my_picture + "' >";
    });
}