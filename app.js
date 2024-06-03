let h3 = document.querySelector("h3");

let button = document.querySelector("button");

let div = document.querySelector("div");


function randColor(){
    let red= Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`
    return color;
}



button.addEventListener("click", function(){
    let generatedColor = randColor();
    h3.innerText=generatedColor;

    div.style.backgroundColor=generatedColor;
    h3.style.color=generatedColor;

    console.log("Color Changed!!");
});
