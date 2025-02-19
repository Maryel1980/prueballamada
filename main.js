function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://storage.googleapis.com/tm-model/XzD12GtkA/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.error(error);
      } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
       

        img = document.getElementById('alien1') 
        img1 = document.getElementById('alien2')
        img2 = document.getElementById('alien3')
        img3 = document.getElementById('alien4')
        llamar=document.getElementById('telefono')
    
        if (results[0].label == "Alarma") {
          img.src = 'aliens-01.gif';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.png';
          
          
        } else if (results[0].label == "Aplausos") {
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.gif';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.png';
          llamar.href='tel: +522381740383';
        } else if (results[0].label == "RIng") {
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.gif';
          img3.src = 'aliens-04.png';
        }else{
          img.src = 'aliens-01.png';
          img1.src = 'aliens-02.png';
          img2.src = 'aliens-03.png';
          img3.src = 'aliens-04.gif';
        }
      }
    
}