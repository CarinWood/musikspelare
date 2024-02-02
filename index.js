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
let currentSound = document.querySelector('.current-sound')
let coverPic = document.createElement('img')
let forwardBtn = document.querySelector('.forward')
let backBtn = document.querySelector('.back')
let shuffle = document.querySelector('.shuffle')
let current = 0
coverPic.src = songList[1].img;
coverPic.classList.add('cover-pic')
let display = document.querySelector('.display')
display.appendChild(coverPic)
console.log(coverPic.src)

let playList = document.querySelector('.play-list')

function setPlayList() {
    for (let i = 0; i < songList.length; i++) {
        playList.children[i].querySelector('.title').innerText = songList[i].title
        playList.children[i].querySelector('.band').innerText = songList[i].band
      
    }
}

setPlayList()

function playTrack(num) {
    playList.children[current].classList.remove('play-color')
    playList.children[num].classList.add('play-color')
    coverPic.src = songList[num].img
    currentSound.src = songList[num].audio
    currentSound.play()
    current = num
}

function playNext() {
    playList.children[current].classList.remove('play-color')
    current++;
    if(current === 6) {
        current = 0;
    }
    playTrack(current)
}

function playPrevious() {
    playList.children[current].classList.remove('play-color')
    current--;
    if(current === -1) {
        current = 5
    }

    playTrack(current)
}

function shufflePlaylist() {
    songList.sort(() => Math.random() - 0.5);
    setPlayList()
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