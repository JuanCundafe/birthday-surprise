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
