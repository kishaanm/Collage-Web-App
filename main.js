function take_snapshot(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(image_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
        }
        
        if(image_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
        }

        if(image_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

setTimeout(function(){
    img_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your Selfie in 5 seconds!";
    synth.speak(utterThis);
    var utterThis = new SpeechSynthesisUtterance(speak_data);
}, 5000);

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}