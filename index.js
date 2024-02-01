let songList = [
    {
        title: "Boys, Girls, Toys & Words",
        band: "Modern Pitch",
        img: '/assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg',
        audio: '/assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.mp3'
    },    
    {
        title: "Boys, Girls, Toys & Words",
        band: "Modern Pitch",
        img: '/assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.jpg',
        audio: '/assets/Boys,_Girls,_Toys_&_Words_-_Modern_Pitch.mp3'
    },    
]

let coverPic = document.createElement('img')
coverPic.src = songList[0].img;
coverPic.classList.add('cover-pic')
let display = document.querySelector('.display')
display.appendChild(coverPic)
console.log(coverPic.src)