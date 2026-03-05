const gift = document.getElementById("giftBox")
const content = document.getElementById("content")
const drum = document.getElementById("drum")

gift.addEventListener("click", openGift)

function openGift(){

gift.style.display="none"

content.style.display="block"

drum.play()

confetti({

particleCount:200,
spread:120,
origin:{y:0.6}

})

}



/* ANIMACION TIMELINE */

const items = document.querySelectorAll(".timeline-item")

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show")

}

})

})

items.forEach(item => {

observer.observe(item)

})



/* AUTOPLAY VIDEO EN SCROLL */

const video = document.querySelector(".surprise-video")

const videoObserver = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

video.play()

}else{

video.pause()

}

})

},{ threshold:0.6 })

videoObserver.observe(video)
