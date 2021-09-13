const play=document.getElementById("play")
const music=document.querySelector("audio")
const image=document.querySelector("img")
const title=document.getElementById("music-title")
const singer=document.getElementById("music-singer")
const forward=document.getElementById("forward")
const backward=document.getElementById("backward")

//play music
let isPlaying=false
const playmusic=()=>{
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    image.classList.add('anime');
}



//pause music
const pausemusic=()=>{
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    image.classList.remove('anime');
}

play.addEventListener('click',()=>{
    isPlaying?pausemusic():playmusic()
})

const songs=[

    {   name:"sholay",
        title:"sholay",
        singer:"Asha Purohit",
    
    },
    {   name:"dhoom",
        title:"dhoom",
        singer:"Shreya Ghosal",
    
    },
    {   name:"Tarhana",
        title:"Tarhana",
        singer:"Mohmmad Rafi",
    
    }

]
songsstring=JSON.stringify(songs)
console.log(songsstring)

const loadSong=(songs)=>{
    title.textContent=songs.title;
    singer.textContent=songs.singer;
    music.src="music/"+songs.name+".mp3";
    image.src="images/"+songs.name+".jpg";
}

songsindex=0
forward.addEventListener('click',()=>{
    songsindex=(songsindex+1)%songs.length;
    loadSong(songs[songsindex])
    playmusic()
})

backward.addEventListener('click',()=>{
    songsindex=(songsindex-1+songs.length)%songs.length;
    loadSong(songs[songsindex])
    playmusic()
})