const body = document.querySelector("body");
// console.log(body)
const IMG_NUMBER = 3;

function handleImageLoad(){
    console.log("finished loading")
}

function paintImage(imgNumber){
    const image = new Image();

    // console.log(`images/${imgNumber +1}.jpg`)

    image.src = `images/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");


    body.appendChild(image);
    // body.prepend(image);


    // image.addEventListener("loadend",handleImageLoad);

}

function genRandom(){
    
    const number = 1
    // const number = Math.floor(Math.random()* IMG_NUMBER);
    
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init();