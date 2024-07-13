let video = document.querySelector(".video__video");
let play = document.querySelector(".video__play");
let pause = document.querySelector(".video__pause");

play.addEventListener("click", ()=>{
    video.play();
    play.style.display = "none";
})

video.addEventListener("click", ()=>{
    video.pause();
    play.style.display = "grid"
})