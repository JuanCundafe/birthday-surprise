function startSurprise(){

let audio = document.getElementById("drumSound")

audio.play()

confetti({

particleCount:200,
spread:100,
origin:{y:0.6}

})

}
