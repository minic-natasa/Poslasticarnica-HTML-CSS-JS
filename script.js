window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 

}



var modal = document.getElementById('myModal');

var btn = document.getElementById("btnLoc");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function pauseMusic(){

    var audioPlayer = document.getElementById('audio-player');
    var audioContainer = $('#music-container');
  
    audioPlayer.pause();
    audioContainer.addClass("music-player--disabled");
  
    console.log("pause music");
  }
  
  function playMusic(){
  
    var audioPlayer = document.getElementById('audio-player');
    var audioContainer = $('#music-container');
  
    audioPlayer.play();
    audioContainer.removeClass("music-player--disabled");
  
    console.log("play music");
  }
