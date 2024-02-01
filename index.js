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
]

let coverPic = document.createElement('img')
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

