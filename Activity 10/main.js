let chImage = "./avocado.png"

function imgExists(chImage){
    const img = new Image();
    img.src = chImage;
    return img.complete;
}

