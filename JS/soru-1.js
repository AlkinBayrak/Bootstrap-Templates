// const box = document.querySelector("#box");
const box = document.getElementById("box");
const body = document.getElementById("body-color");

// function MouseOver() 
// {
//     box.style.color = "red";
// }

box.onmouseover = () => box.style.backgroundColor = "red";

box.addEventListener('mouseout',() =>{
    box.style.backgroundColor = "green"
});



function ButtonOver() 
{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    const rastgeleRenk = `rgb(${red},${green},${blue})`

    document.body.style.backgroundColor = rastgeleRenk;
}

function KontrolEt()
{
    let text = document.getElementById("text").value;
    if(text == "")
        {
            alert("Bu kısım boş olamaz!!");
            return false;
        }
       return true;
}

let meyveler = ["Armut","Elma","Ejder Meyvesi","Karpuz","Kiraz","Mango"];
let liste = document.getElementById("liste");

meyveler.forEach(meyve => {
    let liEtiketi = document.createElement("li");
    liEtiketi.textContent = meyve;
    liste.appendChild(liEtiketi);
    meyveler.sort().reverse();

});

let pictures = ["https://picsum.photos/200/300?random=1","https://picsum.photos/200/300?random=2","https://picsum.photos/200/300?random=3","https://picsum.photos/200/300?random=4","https://picsum.photos/200/300?random=5","https://picsum.photos/200/300?random=6","https://picsum.photos/200/300?random=7","https://picsum.photos/200/300?random=8","https://picsum.photos/200/300?random=9","https://picsum.photos/200/300?random=10","https://picsum.photos/200/300?random=11","https://picsum.photos/200/300?random=12"];

let divList = document.getElementById("container1");

pictures.forEach(picture => {
    let imgTag = document.createElement("img");
    imgTag.src = picture;
    container1.appendChild(imgTag);
});


