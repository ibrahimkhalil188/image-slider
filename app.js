const images = [
    "img/al-aqsa-kaaba.png",
    "img/Jashan-Eid-Milad-Nabi-Mubarak-Greetings.jpg",
    "img/new-year.jpg",
    "img/1618155691_shutterstock_1939809109.webp",
    "img/Eid-al-Adha-small-shutterstock_1129968065.webp",
    "img/lailatul_qadr_4x.webp"
]
const imgContainer = document.getElementById("img-slider")
let imageNumber = 0
setInterval(function () {

    if (imageNumber >= images.length) {
        imageNumber = 0
    }
    const imgUrl = images[imageNumber]
    console.log(imgUrl)
    imgContainer.setAttribute("src", imgUrl)
    imageNumber++
}, 1500)