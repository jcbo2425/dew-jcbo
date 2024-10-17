const audio = document.getElementsByTagName('audio');
const play = document.getElementsByClassName('play');
const back = document.getElementsByClassName('backward');
const ford = document.getElementsByClassName('fordward');

const tracks = ['music1.mp3','music2.mp3','music3.mp3'];
let currentTrack = 0;



function loadTracks(i){
    audio.src = tracks[i];
    audio.load();
}



function togglePlay(){
    if (audio.paused) {
        audio.play();
        play.innerHTML = '<i class="fa fa-pause"></i>';
    } 
    else {
        audio.pause();
        play.innerHTML = '<i class="fa fa-play"></i>';
    }
}



function nextTrack(){
    currentTrack += 1
    if (currentTrack > tracks.length) {
        currentTrack = 0;
    }
    loadTracks(currentTrack);
    audio.play();
    play.innerHTML = '<i class="fa fa-pause"></i>';
}



function prevTrack(){
    currentTrack -= 1;
    if (currentTrack < 0) {
        currentTrack = tracks.length;
    }
    loadTracks(currentTrack);
    audio.play();
    play.innerHTML = '<i class="fa fa-pause"></i>';
}


loadTracks(currentTrack);

play.addEventListener('click', togglePlay);
back.addEventListener('click',prevTrack);
ford.addEventListener('click', nextTrack);
audio.addEventListener('ended', nextTrack);
