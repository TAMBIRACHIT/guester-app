prediction=" ";


Webcam.set({
          width:350,
          height:300,
          image_format:'png',
          png_quality:90

});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
          Webcam.snap(function(data_uri)
          {
                    document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+'"/>';

          });
         
}




console.log('ml5 version:' , ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Agc-nmrQD/model.json');
function modelLoaded(){
    console.log('ModelLoaded!😃');
}

function speak(){
          var synth = window.speechSynthesis;
          speak_data="The  prediction is"+prediction;
          var utterThis = new SpeechSynthesisUtterance(speak_data);
          synth.speak(utterThis)
}


function check(){
          img = document.getElementById('captured_image');
          classify.classifier(img, gotResult);
         
}

function gotResult(error, results){
          if (error) {
                   console.error(error);

          } else{
        
            console.log(results);
                    prediction= results[0].label;
                    speak();
                    console.log(results);
                    prediction= results[0].label;
                    speak();
                    if(results[0].label == "This is looking amazing"){
                        document.getElementById("update_gesture").innerHTML ="👌"      
                    }

                    if(results[0].label == "All the best"){
                              document.getElementById("update_gesture").innerHTML ="✌"      
                          }

                          if(results[0].label == "That was marvelous victory"){
                              document.getElementById("update_gesture").innerHTML ="👍"      
                          }

                         
          }
}