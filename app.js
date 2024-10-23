import { playList } from "./playlist.js";


const audio = document.getElementById('audio');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const forward = document.getElementById('forward');
const rewind = document.getElementById('rewind');
const stop = document.getElementById('stop');
const left = document.getElementById('left');
const right  = document.getElementById('right');


const albumImg = document.getElementById('album');
const songArtist = document.getElementById('artist');
const songTitle = document.getElementById('title');



play.addEventListener('click', () => audio.play())

pause.addEventListener('click', () => audio.pause())

rewind.addEventListener('click', () => audio.currentTime -=10)

forward.addEventListener('click', () => audio.currentTime +=10)

stop.addEventListener('click', () => {
    audio.pause()
    audio.currentTime = 0
})


let currentIndex = 0;
 
function loadSong(index) {
    const song = playList[index];
    audio.src = song.song;
    albumImg.src = song.img;
    songArtist.textContent = song.artist;
    songTitle.textContent = song.title;
    audio.play();
}

loadSong(currentIndex);
right.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % playList.length; 
    loadSong(currentIndex);
});

left.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + playList.length) % playList.length; 
    loadSong(currentIndex);
});

audio.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % playList.length;
    loadSong(currentIndex);
});
