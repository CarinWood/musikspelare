let songList = [
    {
        title: "Boys, Girls, Toys & Words",
        band: "Modern Pitch",
        img: '/assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg',
        audio: '/assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.mp3'
    },    
    {
        title: "Higher and Higher",
        band: "Scream Inc",
        img: '/assets/Higher_And_Higher_-_Scream_Inc._(3).jpg',
        audio: '/assets/Higher_And_Higher_-_Scream_Inc._(3).mp3'
    },    
    {
        title: "Not My Problem",
        band: "All My Friends Hate Me",
        img: '/assets/Not_My_Problem_-_All_My_Friends_Hate_Me.jpg',
        audio: '/assets/Not_My_Problem_-_All_My_Friends_Hate_Me.mp3'
    },    
    {
        title: "Old News",
        band: "Hot Fiction",
        img: '/assets/Old_News_-_Hot_Fiction.jpg',
        audio: '/assets/Old_News_-_Hot_Fiction.mp3'
    },    
    {
        title: "Peyote",
        band: "Kinematic",
        img: '/assets/Peyote_-_Kinematic.jpg',
        audio: '/assets/Peyote_-_Kinematic.mp3'
    },    
    {
        title: "Say Goodbye",
        band: "VITNE",
        img: '/assets/Say_Goodbye_-_VITNE.jpg',
        audio: '/assets/Say_Goodbye_-_VITNE.mp3'
    },    
]

let mainPlay = document.querySelector('.main-play')
let pauseBtn = document.querySelector('.pause')
pauseBtn.classList.add('hidden')
let currentSound = document.querySelector('.current-sound')
let songProgress = document.querySelector('.song-progress');
let currentTimeDisplay = document.querySelector('.current-time');
let durationDisplay = document.querySelector('.duration');
let coverPic = document.createElement('img')
let forwardBtn = document.querySelector('.forward')
let backBtn = document.querySelector('.back')
let shuffle = document.querySelector('.shuffle')
let currentSong = document.querySelector('.song')
let currentBand = document.querySelector('.name')
let current = 0
coverPic.src = songList[0].img;
coverPic.classList.add('cover-pic')
let display = document.querySelector('.display')
display.appendChild(coverPic)
let repeat = document.querySelector('.repeat')
let repeatActive = false;
let playList = document.querySelector('.play-list')
playList.children[current].classList.add('play-color')

function setPlayList() {
    for (let i = 0; i < songList.length; i++) {
        playList.children[i].querySelector('.title').innerText = songList[i].title
        playList.children[i].querySelector('.band').innerText = songList[i].band
      
    }
}

setPlayList()

function playTrack(num) {
    mainPlay.classList.add('hidden')
    pauseBtn.classList.remove('hidden')
    playList.children[current].classList.remove('play-color')
    playList.children[num].classList.add('play-color')
    coverPic.src = songList[num].img
    currentSong.innerText = songList[num].title
    currentBand.innerText = songList[num].band
    currentSound.src = songList[num].audio
    if (repeatActive) {
        currentSound.addEventListener('ended', playMusicList);
    }


    currentSound.play()
    current = num
}

function playMusicList() {
    playList.children[current].classList.remove('play-color')
    current++;
    if (repeatActive) {
        if (current === songList.length) {
            current = 0;
        }
        playTrack(current);
    } else {
        if (current < songList.length) {
            playTrack(current);
        }
    }

}

function playNext() {
    playList.children[current].classList.remove('play-color')
    current++;
    if(current === 6) {
        current = 0;
    }
    playTrack(current)
    mainPlay.classList.add('hidden')
    pauseBtn.classList.remove('hidden')
}

function playPrevious() {
    playList.children[current].classList.remove('play-color')
    current--;
    if(current === -1) {
        current = 5
    }

    playTrack(current)
    mainPlay.classList.add('hidden')
    pauseBtn.classList.remove('hidden')
}

function shufflePlaylist() {
    playList.children[current].classList.remove('play-color')
    songList.sort(() => Math.random() - 0.5);
    setPlayList()
    playTrack(0)
}

function repeatList() {
    repeatActive = !repeatActive
    
    if(repeatActive) {
        repeat.classList.add('active')
    } else {
        repeat.classList.remove('active')
    }
  
}

function mainPlayClick() {
    mainPlay.classList.add('hidden')
    pauseBtn.classList.remove('hidden')
    if (currentSound.paused) {
        currentSound.currentTime = currentSound.currentTime;
        currentSound.play();
    } else {
        playTrack(current);
    }
}

function pauseClick() {
    mainPlay.classList.remove('hidden')
    pauseBtn.classList.add('hidden')
    currentSound.pause()
}


let buttonOne = document.querySelector('.one')
buttonOne.addEventListener('click', () =>playTrack(0))
let buttonTwo = document.querySelector('.two')
buttonTwo.addEventListener('click', () => playTrack(1))
let buttonThree = document.querySelector('.three')
buttonThree.addEventListener('click', () => playTrack(2))
let buttonFour = document.querySelector('.four')
buttonFour.addEventListener('click', () => playTrack(3))
let buttonFive = document.querySelector('.five')
buttonFive.addEventListener('click', () => playTrack(4))
let buttonSix = document.querySelector('.six')
buttonSix.addEventListener('click', () => playTrack(5))

forwardBtn.addEventListener('click', playNext)
backBtn.addEventListener('click', playPrevious)
shuffle.addEventListener('click', shufflePlaylist)
repeat.addEventListener('click', repeatList)
mainPlay.addEventListener('click', mainPlayClick)
pauseBtn.addEventListener('click', pauseClick)
currentSound.addEventListener('loadedmetadata', function () {
    songProgress.max = currentSound.duration;
    durationDisplay.textContent = formatTime(currentSound.duration);
});
currentSound.addEventListener('timeupdate', function () {
    songProgress.value = currentSound.currentTime;
    currentTimeDisplay.textContent = formatTime(currentSound.currentTime);
});
songProgress.addEventListener('input', function () {
    currentSound.currentTime = songProgress.value;
});
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}