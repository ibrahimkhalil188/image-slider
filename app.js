const images = [
    "img/5-Shab-e-Barat-Wishes-1.jpg",
    "img/75918306.webp",
    "img/1618155691_shutterstock_1939809109.webp",
    "img/al-aqsa-kaaba.png",
    "img/new-year.jpg",
    "img/Eid-al-Adha-small-shutterstock_1129968065.webp",
    "img/Jashan-Eid-Milad-Nabi-Mubarak-Greetings.jpg",
    "img/lailatul_qadr_4x.webp"

]
const imgContainer = document.getElementById("img-slider")
let imageNumber = 0
setInterval(function () {
    const imgUrl = images[imageNumber]
    if (imageNumber >= images.length) {
        imageNumber = 0
    }
    imgContainer.setAttribute("src", imgUrl)
    console.log(images[imageNumber])
    imageNumber++
}, 1500)